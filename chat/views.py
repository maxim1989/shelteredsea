from django.contrib.auth.models import User
from rest_framework.response import Response
from rest_framework.views import APIView

from chat.models import Chat, ManyChatsToManyUsersConnector, Message
from chat.serializers import ManyChatsToManyUsersConnectorSerializer, MessageSerializer
from disputes.models import TempDeals


class ChatList(APIView):
    def get(self, request):
        u = request.user.id
        my_chats_uids = [ch.chat for ch in ManyChatsToManyUsersConnector.objects.filter(user=u)]
        temp_deal_chats_uids = [i.chat for i in TempDeals.objects.filter(chat__in=my_chats_uids)]
        my_chats_uids = [j for j in my_chats_uids if j not in temp_deal_chats_uids]
        users_in_my_chats = ManyChatsToManyUsersConnector.objects.\
            filter(chat__in=my_chats_uids).\
            exclude(user=u).\
            order_by('chat__name')

        serializer = ManyChatsToManyUsersConnectorSerializer(users_in_my_chats, many=True,
                                                             context={'users_in_my_chats': users_in_my_chats,
                                                                      'myself': u})
        return Response(serializer.data)


class LastMessages(APIView):
    def get(self, request, chat):
        check_user = ManyChatsToManyUsersConnector.objects.filter(chat=int(chat)).filter(user=request.user.id)
        if not check_user:
            return Response(list())
        messages = Message.objects.filter(chat=chat).filter(is_read=False).exclude(user=request.user.id)
        uids = list()
        for mes in messages:
            uids.append(mes.id)
            Message.objects.filter(id=mes.id).update(is_read=True)
        messages = Message.objects.filter(id__in=uids).order_by('creation_datetime')
        serializer = MessageSerializer(messages, many=True)
        return Response(serializer.data)


class SendMessage(APIView):
    def get(self, request, chat):
        check_user = ManyChatsToManyUsersConnector.objects.filter(chat=int(chat)).filter(user=request.user.id)
        if not check_user:
            return Response(list())

        messages = Message.objects.filter(chat=chat).filter(is_read=False).exclude(user=request.user.id)
        for mes in messages:
            Message.objects.filter(id=mes.id).update(is_read=True)
        # other_users = ManyChatsToManyUsersConnector.objects.filter(chat=int(chat)).exclude(user=request.user.id)
        # for user in other_users:
        #     Message.objects.filter(chat=chat).filter(user=user.id).update(is_read=True)

        messages = Message.objects.filter(chat=chat).order_by('creation_datetime')
        serializer = MessageSerializer(messages, many=True)

        return Response(serializer.data)

    def post(self, request, chat):
        try:
            chat_object = Chat.objects.get(pk=int(chat))
            user_object = User.objects.get(pk=request.user.id)
        except Chat.DoesNotExist as err:
            return Response({'success': False, 'error': str(err)})
        except User.DoesNotExist as err:
            return Response({'success': False, 'error': str(err)})

        serializer = MessageSerializer(data=request.data,
                                       context={'chat_object': chat_object, 'user_object': user_object},
                                       partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)