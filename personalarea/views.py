import copy
import datetime

from django.contrib.auth.models import User
from rest_framework import permissions
from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response
from rest_framework.views import APIView

from chat.models import Chat, ManyChatsToManyUsersConnector, Message
from loginsys.models import AdditionalUuid
from loginsys.serializers import AuthenticatedUserSerializer
from personalarea.models import Friends
from personalarea.serializers import FriendsSerializer


class FriendsList(APIView):
    renderer_classes = (JSONRenderer,)
    permission_classes = (permissions.IsAuthenticated,)

    def get(self, request):
        u = request.user.id
        my_friends_uids = [ch.user_friend for ch in Friends.objects.filter(user=u)]
        my_friends = Friends.objects.\
            filter(user_friend__in=my_friends_uids).filter(is_friend=True).order_by('user_friend__username')
        want_be_their_friend = Friends.objects. \
            filter(user_friend__in=my_friends_uids).filter(is_friend=False).order_by('user_friend__username')
        serializer_friend = FriendsSerializer(my_friends, many=True)
        serializer_not_friend = FriendsSerializer(want_be_their_friend, many=True)
        data = dict(my_friends=serializer_friend.data, want_be_their_friend=serializer_not_friend.data)
        return Response(data)


def create_chat(my_id, friend_id):
    my_chats = {chat.chat.id for chat in ManyChatsToManyUsersConnector.objects.filter(user=my_id)}
    friend_chats = {chat.chat.id for chat in ManyChatsToManyUsersConnector.objects.filter(user=friend_id)}
    chat_set = my_chats & friend_chats
    me = User.objects.get(pk=my_id)
    if chat_set:
        chat = chat_set.pop()
        chat = Chat.objects.get(pk=chat)
    else:
        chat_name = datetime.datetime.now().strftime("%d-%m-%Y|%H:%M")
        chat = Chat(name=chat_name)
        chat.save()
        connet_me_to_chat = ManyChatsToManyUsersConnector(chat=chat, user=me)
        connet_me_to_chat.save()
        friend = User.objects.get(pk=friend_id)
        connet_friend_to_chat = ManyChatsToManyUsersConnector(chat=chat, user=friend)
        connet_friend_to_chat.save()
    return chat, me


def invite_friend(chat, me):
    message = Message(
        chat=chat, user=me,
        message="Пользователь {0} просит добавить его в друзья".format(me.additional_name.chat_name)
    )
    message.save()


class FindUser(APIView):
    renderer_classes = (JSONRenderer,)
    permission_classes = (permissions.IsAuthenticated,)

    def get(self, request, uid_for_client):
        try:
            find_user = AdditionalUuid.objects.get(uid_for_client=uid_for_client)
        except AdditionalUuid.DoesNotExist:
            return Response(list())
        user = User.objects.get(pk=find_user.id)
        serializer = AuthenticatedUserSerializer(user)
        data = copy.deepcopy(serializer.data)
        is_friend = Friends.objects.filter(user=request.user.id).filter(user_friend=user.id)
        data['is_friend'] = False
        if is_friend:
            data['is_friend'] = is_friend[0].is_friend
        return Response([data])

    def post(self, request, uid_for_client):
        try:
            person = AdditionalUuid.objects.get(uid_for_client=uid_for_client)
        except AdditionalUuid.DoesNotExist:
            return Response({'success': False, 'exist': False})

        if person.user.id == request.user.id:
            return Response({'success': False, 'exist': True})

        chat, me = create_chat(request.user.id, person.user.id)

        friend = Friends.objects.filter(user=request.user.id).filter(user_friend=person.user.id)
        if friend:
            if friend[0].is_friend:
                return Response({'success': True, 'created': False, 'exist': True, 'is_friend': True})
            invite_friend(chat, me)
            return Response({'success': True, 'created': False, 'exist': True, 'is_friend': False})

        data_on_save = dict(user_friend=person.user.id, user=request.user.id, is_friend=False)
        serializer = FriendsSerializer(data=data_on_save)
        if serializer.is_valid():
            invite_friend(chat, me)
            serializer.save()
            return Response({'success': True, 'created': True, 'exist': True, 'is_friend': False})
        return Response({'success': False, 'created': False, 'exist': True, 'is_friend': False})


class Accept(APIView):
    renderer_classes = (JSONRenderer,)
    permission_classes = (permissions.IsAuthenticated,)

    def post(self, request, uid_for_client):
        try:
            person = AdditionalUuid.objects.get(uid_for_client=uid_for_client)
        except AdditionalUuid.DoesNotExist:
            return Response({'success': False, 'exist': False})

        if person.user.id == request.user.id:
            return Response({'success': False, 'exist': True})

        who_invite = Friends.objects.filter(user_friend=request.user.id).filter(user=person.user.id)[0]
        if request.data.get('accept'):
            who_invite.is_friend = True
            data_on_save = dict(user_friend=person.user.id, user=request.user.id, is_friend=True)
            serializer_add = FriendsSerializer(data=data_on_save)
            if serializer_add.is_valid():
                who_invite.save()
                serializer_add.save()
                return Response({'success': True, 'created': True, 'exist': True, 'is_friend': True})
            return Response({'success': False, 'created': False, 'exist': True, 'is_friend': False})
        else:
            who_invite.delete()
            return Response({'success': True, 'created': False, 'exist': True, 'is_friend': False})


class Delete(APIView):
    renderer_classes = (JSONRenderer,)
    permission_classes = (permissions.IsAuthenticated,)

    def post(self, request, uid_for_client):
        try:
            person = AdditionalUuid.objects.get(uid_for_client=uid_for_client)
        except AdditionalUuid.DoesNotExist:
            return Response({'success': False, 'exist': False})

        if person.user.id == request.user.id:
            return Response({'success': False, 'exist': True})

        delete_from_my_side = Friends.objects.filter(user=request.user.id).filter(user_friend=person.user.id)
        delete_from_his_side = Friends.objects.filter(user_friend=request.user.id).filter(user=person.user.id)
        delete_from_my_side.delete()
        delete_from_his_side.delete()
        return Response({'success': True, 'created': False, 'exist': True, 'is_friend': False})


class Ignore(APIView):
    renderer_classes = (JSONRenderer,)
    permission_classes = (permissions.IsAuthenticated,)

    def post(self, request, uid_for_client):
        try:
            person = AdditionalUuid.objects.get(uid_for_client=uid_for_client)
        except AdditionalUuid.DoesNotExist:
            return Response({'success': False, 'exist': False})

        if person.user.id == request.user.id:
            return Response({'success': False, 'exist': True})

        ignore_friend = Friends.objects.filter(user=request.user.id).filter(user_friend=person.user.id)[0]
        ignore_friend.is_ignore = True
        ignore_friend.save()
        return Response({'success': True, 'exist': True})