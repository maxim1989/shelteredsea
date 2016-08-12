import copy

from django.contrib.auth.models import User
from rest_framework import permissions
from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response
from rest_framework.views import APIView

from loginsys.models import AdditionalUuid
from loginsys.serializers import AuthenticatedUserSerializer
from personalarea.models import Friends
from personalarea.serializers import FriendsSerializer


class FriendsList(APIView):
    renderer_classes = (JSONRenderer,)

    def get(self, request):
        u = request.user.id
        my_friends_uids = [ch.user_friend for ch in Friends.objects.filter(user=u)]
        my_friends = Friends.objects.\
            filter(user_friend__in=my_friends_uids).\
            order_by('user_friend__username')
        serializer = FriendsSerializer(my_friends, many=True)
        return Response(serializer.data)


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