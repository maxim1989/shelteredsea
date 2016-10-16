from datetime import timedelta

from django.contrib.auth.models import User
from django.db.models import Q
from django.utils import timezone
from rest_framework import permissions, status
from rest_framework.response import Response
from rest_framework.views import APIView

from disputes.models import Games, OrderForDeal, TempDeals
from disputes.serializer import GamesSerializer, OrderForDealSerializer, TempDealsSerializer


class AllGames(APIView):
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)

    def get(self, request):
        games = Games.objects.all()
        serializer = GamesSerializer(games, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class OneGame(APIView):
    def get(self, request, namespace):
        try:
            game = Games.objects.get(namespace=namespace)
        except Games.DoesNotExist as err:
            return Response({'success': False, 'error': str(err)}, status=status.HTTP_403_FORBIDDEN)
        serializer = GamesSerializer(game)
        return Response(serializer.data, status=status.HTTP_200_OK)


def find_competitor(request, game, me):
    interval = timedelta(seconds=600)
    common_part = OrderForDeal.objects.exclude(user=request.user.id).\
        filter(in_negotiations=False, is_active=True, game=game.id).\
        filter(Q(myself__isnull=True) | Q(myself__create_moment__lt=timezone.now() - interval)).order_by('modificate_moment')

    strict_filter = [item.id for item in common_part
                     if int(item.integer_part_from) >= int(me.integer_part_from) and
                        int(item.fractional_part_from) >= int(me.fractional_part_from) and
                        int(item.integer_part_to) <= int(me.integer_part_to) and
                        int(item.fractional_part_to) <= int(me.fractional_part_to) and
                        item.games_count == me.games_count and
                        item.team_size == me.team_size]
    light_filter = [item.id for item in common_part
                    if item.id not in strict_filter and
                       int(item.integer_part_from) >= int(me.integer_part_from) and
                       int(item.fractional_part_from) >= int(me.fractional_part_from) and
                       int(item.integer_part_to) <= int(me.integer_part_to) and
                       int(item.fractional_part_to) <= int(me.fractional_part_to) or
                       item.games_count == me.games_count or
                       item.team_size == me.team_size
                    ]

    total_data = strict_filter + light_filter
    return total_data[0] if total_data else 0


class Order(APIView):
    def get(self, request, namespace):
        try:
            game = Games.objects.get(namespace=namespace)
            order_id = request.GET["order_id"]  # TODO возможно будет приходить в ajax запросе, тогда request.data
            me = OrderForDeal.objects.get(pk=order_id)
        except Games.DoesNotExist as err:
            return Response({'success': False, 'error': str(err)}, status=status.HTTP_403_FORBIDDEN)
        except KeyError as err:
            return Response({'success': False, 'error': str(err)}, status=status.HTTP_403_FORBIDDEN)
        except OrderForDeal.DoesNotExist as err:
            return Response({'success': False, 'error': str(err)}, status=status.HTTP_403_FORBIDDEN)
        if me.in_negotiations:
            serializer_temp_deal = TempDealsSerializer(me.temp_deal)
            return Response({'success': True, 'temp_deal': serializer_temp_deal.data}, status=status.HTTP_200_OK)
        competitor_id = find_competitor(request, game, me)
        if competitor_id:
            serializer_temp_deal = TempDealsSerializer(
                data={'is_active': True},
                partial=True,
                context={'uids': [order_id, competitor_id], 'in_negotiations': True})
            if serializer_temp_deal.is_valid():
                serializer_temp_deal.save()
                return Response({'success': True, 'temp_deal': serializer_temp_deal.data}, status=status.HTTP_200_OK)

            return Response({'success': False, 'error': serializer_temp_deal.errors}, status=status.HTTP_403_FORBIDDEN)
        return Response({'success': True, 'temp_deal': 0}, status=status.HTTP_200_OK)

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
            return Response({'success': False, 'error': str(err)}, status=status.HTTP_403_FORBIDDEN)
        except User.DoesNotExist as err:
            return Response({'success': False, 'error': str(err)}, status=status.HTTP_403_FORBIDDEN)
        serializer = OrderForDealSerializer(data=request.data, partial=True,
                                            context={'myself': myself, 'game': game})
        if serializer.is_valid():
            serializer.save()
            return Response({'success': True, 'data': serializer.data}, status=status.HTTP_200_OK)
        return Response({'success': False, 'error': serializer.errors}, status=status.HTTP_403_FORBIDDEN)


class MyOrders(APIView):
    def get(self, request, namespace):
        try:
            game = Games.objects.get(namespace=namespace)
        except Games.DoesNotExist as err:
            return Response({'success': False, 'error': str(err)}, status=status.HTTP_403_FORBIDDEN)
        query = OrderForDeal.objects.filter(user=request.user.id).filter(game=game.id).order_by('modificate_moment')
        serializer = OrderForDealSerializer(query, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class Next(APIView):
    def post(self, request, temp_deal_id):
        try:
            temp_deal = TempDeals.objects.get(pk=temp_deal_id)
        except TempDeals.DoesNotExist as err:
            return Response({'success': False, 'error': str(err)}, status=status.HTTP_403_FORBIDDEN)
        serializer = TempDealsSerializer(temp_deal, data={'is_active': False}, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response({'success': True, 'temp_deal': serializer.data}, status=status.HTTP_200_OK)
        return Response({'success': False, 'error': serializer.errors}, status=status.HTTP_403_FORBIDDEN)


class CloseOrder(APIView):
    def post(self, request, order_id):
        try:
            user = User.objects.get(pk=request.user.id)
            order = OrderForDeal.objects.get(pk=order_id)
        except User.DoesNotExist as err:
            return Response({'success': False, 'error': str(err)}, status=status.HTTP_403_FORBIDDEN)
        except OrderForDeal.DoesNotExist as err:
            return Response({'success': False, 'error': str(err)}, status=status.HTTP_403_FORBIDDEN)
        serializer = OrderForDealSerializer(order, partial=True, context={'user': user},
                                            data={'is_active': False, 'temp_deal': None, 'in_negotiations': False})
        if serializer.is_valid():
            serializer.save()
            return Response({'success': True, 'temp_deal': serializer.data}, status=status.HTTP_200_OK)
        return Response({'success': False, 'error': serializer.errors}, status=status.HTTP_403_FORBIDDEN)


class Conditions(APIView):
    def get(self, request, order_id):
        try:
            order = OrderForDeal.objects.get(pk=order_id)
        except OrderForDeal.DoesNotExist as err:
            return Response({'success': False, 'error': str(err)}, status=status.HTTP_403_FORBIDDEN)
        serializer = OrderForDealSerializer(order)
        return Response(serializer.data, status=status.HTTP_200_OK)
