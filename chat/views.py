from django.contrib import auth
from django.contrib.auth.models import User
from django.core.urlresolvers import reverse
from django.shortcuts import HttpResponseRedirect, render
from rest_framework import permissions
from rest_framework.decorators import api_view, permission_classes
from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response
from rest_framework.views import APIView

from chat.models import ManyChatsToManyUsersConnector
from chat.serializers import ManyChatsToManyUsersConnectorSerializer


class ChatList(APIView):
    renderer_classes = (JSONRenderer,)

    def get(self, request):
        u = request.user.id
        my_chats_uids = [ch.chat for ch in ManyChatsToManyUsersConnector.objects.filter(user=u)]
        users_in_my_chats = ManyChatsToManyUsersConnector.objects.\
            filter(chat__in=my_chats_uids).\
            exclude(user=u).\
            order_by('chat__name')
        serializer = ManyChatsToManyUsersConnectorSerializer(users_in_my_chats, many=True)
        return Response(serializer.data)
