from rest_framework import serializers

from .models import Friends


class FriendsSerializer(serializers.ModelSerializer):
    user_friend_name = serializers.SerializerMethodField()
    user_name = serializers.SerializerMethodField()

    def get_user_friend_name(self, obj):
        return obj.user_friend.additional_name.chat_name

    def get_user_name(self, obj):
        return obj.user.additional_name.chat_name

    class Meta:
        model = Friends
        fields = ('user_friend_name', 'user_friend', 'user_name', 'user', 'is_friend', 'is_ignore')