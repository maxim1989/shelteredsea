from rest_framework.response import Response
from rest_framework.views import APIView

from disputes.models import Games
from disputes.serializer import GamesSerializer


class Game(APIView):
    def get(self, request):
        games = Games.objects.all()
        serializer = GamesSerializer(games, many=True)
        return Response(serializer.data)


class Dispute(APIView):
    def get(self, request, namespace):
        print('namespace {0}'.format(namespace))
        return Response({'namespace': namespace})