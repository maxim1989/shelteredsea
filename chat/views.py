from django.contrib.auth.models import User
from rest_framework import permissions
from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response
from rest_framework.views import APIView

from chat.models import Chat, ManyChatsToManyUsersConnector, Message
from chat.serializers import ManyChatsToManyUsersConnectorSerializer


class ChatList(APIView):
    renderer_classes = (JSONRenderer,)
    permission_classes = (permissions.IsAuthenticated,)

    def get(self, request):
        u = request.user.id
        my_chats_uids = [ch.chat for ch in ManyChatsToManyUsersConnector.objects.filter(user=u)]
        users_in_my_chats = ManyChatsToManyUsersConnector.objects.\
            filter(chat__in=my_chats_uids).\
            exclude(user=u).\
            order_by('chat__name')
        serializer = ManyChatsToManyUsersConnectorSerializer(users_in_my_chats, many=True)
        return Response(serializer.data)


class SendMessage(APIView):
    renderer_classes = (JSONRenderer,)
    permission_classes = (permissions.IsAuthenticated,)

    def post(self, request, chat):
        text = request.data.get('text', '')
        try:
            chat = Chat.objects.get(pk=int(chat))
            user = User.objects.get(pk=request.user.id)
        except Chat.DoesNotExist as err:
            return Response({'success': False, 'error': str(err)})
        except User.DoesNotExist as err:
            return Response({'success': False, 'error': str(err)})
        message = Message(chat=chat, user=user, message=text)
        message.save()
        return Response({'success': True})
