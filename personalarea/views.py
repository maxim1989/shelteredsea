from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response
from rest_framework.views import APIView

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