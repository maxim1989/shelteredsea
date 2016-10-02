from datetime import timedelta

from django.contrib.auth.models import User
from django.db.models import Q
from django.utils import timezone
from rest_framework.response import Response
from rest_framework.views import APIView

from disputes.models import Games, OrderForDeal, TempDeals
from disputes.serializer import GamesSerializer, OrderForDealSerializer, TempDealsSerializer


class Game(APIView):
    def get(self, request):
        games = Games.objects.all()
        serializer = GamesSerializer(games, many=True)
        return Response(serializer.data)


class Dispute(APIView):
    def get(self, request, namespace):
        print('namespace {0}'.format(namespace))
        return Response({'namespace': namespace})


def find_competitor(request, game, me):
    interval = timedelta(seconds=600)
    common_part = OrderForDeal.objects.exclude(user=request.user.id).\
        filter(in_negotiations=False, is_active=True, game=game.id).\
        filter(myself__create_moment__lt=timezone.now() - interval)
    strict_filter = common_part. \
        filter(left_rate=me.left_rate, right_rate=me.right_rate, rate_trent=me.rate_trent,
               games_count=me.games_count, team_size=me.team_size).order_by('modificate_moment')
    strict_filter = [item.id for item in strict_filter]
    light_filter = common_part.\
        filter(Q(left_rate=me.left_rate) | Q(right_rate=me.right_rate) | Q(rate_trent=me.rate_trent) |
               Q(games_count=me.games_count) | Q(team_size=me.team_size)).order_by('modificate_moment')
    light_filter = [item.id for item in light_filter if item.id not in strict_filter]
    total_data = strict_filter + light_filter
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
                data={'steam_game_uid': 'TEST_UID',
                      'is_active': True},
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