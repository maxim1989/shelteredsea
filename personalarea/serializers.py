from rest_framework import serializers

from .models import Friends

from loginsys.serializers import AuthenticatedUserSerializer


class FriendsSerializer(serializers.ModelSerializer):
    myself = AuthenticatedUserSerializer()
    friend = AuthenticatedUserSerializer()

    class Meta:
        model = Friends
        fields = ('friend', 'myself', 'is_friend', 'is_ignore')