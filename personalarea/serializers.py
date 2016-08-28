from rest_framework import serializers

from .models import Friends

from loginsys.serializers import AuthenticatedUserSerializer


class FriendsSerializer(serializers.ModelSerializer):
    user = AuthenticatedUserSerializer()
    user_friend = AuthenticatedUserSerializer()

    class Meta:
        model = Friends
        fields = ('user_friend', 'user', 'is_friend', 'is_ignore')