from django.contrib.auth.models import User
from rest_framework.response import Response
from rest_framework.views import APIView

from disputes.models import Games
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


class Order(APIView):
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