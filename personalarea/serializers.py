from rest_framework import serializers

from .models import Friends


class FriendsSerializer(serializers.ModelSerializer):
    user_friend_name = serializers.SerializerMethodField()
    statistic_name = serializers.SerializerMethodField()
    dispute_name = serializers.SerializerMethodField()
    username = serializers.SerializerMethodField()

    def get_user_friend_name(self, obj):
        return obj.user_friend.additional_name.chat_name

    def get_statistic_name(self, obj):
        return obj.user.statistic_name.name

    def get_dispute_name(self, obj):
        return obj.user.dispute_name.name

    def get_username(self, obj):
        return obj.user.username

    class Meta:
        model = Friends
        fields = ('user_friend_name', 'user_friend', 'statistic_name', 'user', 'is_friend', 'is_ignore', 'username',
                  'dispute_name')