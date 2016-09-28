from datetime import datetime, timedelta

from django.contrib.auth.models import User
from django.db.models import Q
from django.utils import timezone
from rest_framework.response import Response
from rest_framework.views import APIView

from disputes.models import CanceledNegotiations, Games, OrderForDeal
from disputes.serializer import GamesSerializer, OrderForDealSerializer


class Game(APIView):
    def get(self, request):
        games = Games.objects.all()
        serializer = GamesSerializer(games, many=True)
        return Response(serializer.data)


class Dispute(APIView):
    def get(self, request, namespace):
        print('namespace {0}'.format(namespace))
        return Response({'namespace': namespace})


def find_competitor(request, game, deal):
    common_part = OrderForDeal.objects.exclude(user=request.user.id).\
        filter(in_negotiations=False, is_active=True, game=game.id)
    strict_filter = common_part. \
        filter(left_rate=deal.left_rate, right_rate=deal.right_rate, rate_trent=deal.rate_trent,
               games_count=deal.games_count, team_size=deal.team_size).order_by('modificate_moment')
    strict_filter = [item.id for item in strict_filter]
    light_filter = common_part.\
        filter(Q(left_rate=deal.left_rate) | Q(right_rate=deal.right_rate) | Q(rate_trent=deal.rate_trent) |
               Q(games_count=deal.games_count) | Q(team_size=deal.team_size)).order_by('modificate_moment')
    light_filter = [item.id for item in light_filter if item.id not in strict_filter]
    total_data = strict_filter + light_filter
    interval = timedelta(seconds=600)
    for competitor_uid in total_data:
        try:
            canceled = CanceledNegotiations.objects.get(myself=competitor_uid)
            if timezone.now() - canceled.create_moment > interval:
                return competitor_uid
        except CanceledNegotiations.DoesNotExist:
            return competitor_uid
    return 0


class Order(APIView):
    def get(self, request, namespace):
        try:
            game = Games.objects.get(namespace=namespace)
            order_id = request.GET["order_id"]
            deal = OrderForDeal.objects.get(pk=order_id)
        except Games.DoesNotExist as err:
            return Response({'success': False, 'error': str(err)})
        except KeyError as err:
            return Response({'success': False, 'error': str(err)})
        except OrderForDeal.DoesNotExist as err:
            return Response({'success': False, 'error': str(err)})
        result = find_competitor(request, game, deal)
        return Response({'result': result})

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