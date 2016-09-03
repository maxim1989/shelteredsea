from rest_framework import serializers

from .models import Friends

from loginsys.serializers import AuthenticatedUserSerializer


class FriendsSerializer(serializers.ModelSerializer):
    myself = AuthenticatedUserSerializer()
    friend = AuthenticatedUserSerializer()

    class Meta:
        model = Friends
        fields = ('friend', 'myself', 'is_friend', 'is_ignore')

    def create(self, validated_data):
        is_friend = validated_data.get('is_friend')
        myself = self.context.get('myself')
        friend = self.context.get('friend')
        friend_instance = Friends(friend=friend, myself=myself, is_friend=is_friend)
        friend_instance.save()
        return friend_instance