from datetime import timedelta

from django.contrib.auth.models import User
from django.http import Http404
from django.db.models import Q
from django.utils import timezone
from rest_framework import permissions
from rest_framework.response import Response
from rest_framework.views import APIView

from disputes.models import Games, OrderForDeal, TempDeals
from disputes.serializer import GamesSerializer, OrderForDealSerializer, TempDealsSerializer


class AllGames(APIView):
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)

    def get(self, request):
        games = Games.objects.all()
        serializer = GamesSerializer(games, many=True)
        return Response(serializer.data)


class OneGame(APIView):
    def get(self, request, namespace):
        try:
            game = Games.objects.get(namespace=namespace)
        except Games.DoesNotExist:
            raise Http404
        serializer = GamesSerializer(game)
        return Response(serializer.data)


def find_competitor(request, game, me):
    interval = timedelta(seconds=600)
    common_part = OrderForDeal.objects.exclude(user=request.user.id).\
        filter(in_negotiations=False, is_active=True, game=game.id).\
        filter(Q(myself__isnull=True) | Q(myself__create_moment__lt=timezone.now() - interval)).order_by('modificate_moment')

    print('common_part')
    print(', '.join(str(f.id) for f in common_part))
    strict_filter = [item.id for item in common_part
                     if int(item.integer_part_from) >= int(me.integer_part_from) and
                        int(item.fractional_part_from) >= int(me.fractional_part_from) and
                        int(item.integer_part_to) <= int(me.integer_part_to) and
                        int(item.fractional_part_to) <= int(me.fractional_part_to) and
                        item.games_count == me.games_count and
                        item.team_size == me.team_size]
    print('strict_filter')
    print(strict_filter)
    light_filter = [item.id for item in common_part
                    if item.id not in strict_filter and
                       int(item.integer_part_from) >= int(me.integer_part_from) and
                       int(item.fractional_part_from) >= int(me.fractional_part_from) and
                       int(item.integer_part_to) <= int(me.integer_part_to) and
                       int(item.fractional_part_to) <= int(me.fractional_part_to) or
                       item.games_count == me.games_count or
                       item.team_size == me.team_size
                    ]
    print('light_filter')
    print(light_filter)

    total_data = strict_filter + light_filter
    print('light_filter')
    print(light_filter)
    return total_data[0] if total_data else 0


class Order(APIView):
    def get(self, request, namespace):
        try:
            game = Games.objects.get(namespace=namespace)
            order_id = request.GET["order_id"]  # TODO возможно будет приходить в ajax запросе, тогда request.data
            me = OrderForDeal.objects.get(pk=order_id)
        except Games.DoesNotExist as err:
            return Response({'success': False, 'error': str(err)})
        except KeyError as err:
            return Response({'success': False, 'error': str(err)})
        except OrderForDeal.DoesNotExist as err:
            return Response({'success': False, 'error': str(err)})
        if me.in_negotiations:
            serializer_temp_deal = TempDealsSerializer(me.temp_deal)
            return Response({'success': True, 'temp_deal': serializer_temp_deal.data})
        competitor_id = find_competitor(request, game, me)
        if competitor_id:
            serializer_temp_deal = TempDealsSerializer(
                data={'is_active': True},
                partial=True,
                context={'uids': [order_id, competitor_id], 'in_negotiations': True})
            if serializer_temp_deal.is_valid():
                serializer_temp_deal.save()
                return Response({'success': True, 'temp_deal': serializer_temp_deal.data})

            return Response({'success': False, 'error': serializer_temp_deal.errors})
        return Response({'success': True, 'temp_deal': 0})

    def post(self, request, namespace):
        """
        Параметры в POST запросе: left_rate, right_rate, rate_trent, games_count, team_size
        :param request:
        :param namespace: имя игры (уникально)
        :return:
        """
        try:
            game = Games.objects.get(namespace=namespace)
            myself = User.objects.get(pk=request.user.id)
        except Games.DoesNotExist as err:
            return Response({'success': False, 'error': str(err)})
        except User.DoesNotExist as err:
            return Response({'success': False, 'error': str(err)})
        serializer = OrderForDealSerializer(data=request.data, partial=True,
                                            context={'myself': myself, 'game': game})
        if serializer.is_valid():
            serializer.save()
            return Response({'success': True, 'data': serializer.data})
        return Response({'success': False, 'error': serializer.errors})


class Next(APIView):
    def post(self, request, temp_deal_id):
        try:
            temp_deal = TempDeals.objects.get(pk=temp_deal_id)
        except TempDeals.DoesNotExist:
            raise Http404
        serializer = TempDealsSerializer(temp_deal, data={'is_active': False}, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response({'success': True, 'temp_deal': serializer.data})
        return Response({'success': False, 'error': serializer.errors})


class CloseOrder(APIView):
    def post(self, request, order_id):
        try:
            user = User.objects.get(pk=request.user.id)
            order = OrderForDeal.objects.get(pk=order_id)
        except User.DoesNotExist:
            raise Http404
        except OrderForDeal.DoesNotExist:
            raise Http404
        serializer = OrderForDealSerializer(order, partial=True, context={'user': user},
                                            data={'is_active': False, 'temp_deal': None, 'in_negotiations': False})
        if serializer.is_valid():
            serializer.save()
            return Response({'success': True, 'temp_deal': serializer.data})
        return Response({'success': False, 'error': serializer.errors})