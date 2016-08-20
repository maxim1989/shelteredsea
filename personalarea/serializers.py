from rest_framework import serializers

from .models import Friends


class FriendsSerializer(serializers.ModelSerializer):
    uid_for_client = serializers.SerializerMethodField()
    statistic_name = serializers.SerializerMethodField()
    dispute_name = serializers.SerializerMethodField()
    username = serializers.SerializerMethodField()

    def get_uid_for_client(self, obj):
        return obj.user.uid_for_client.uid_for_client

    def get_statistic_name(self, obj):
        return obj.user.statistic_name.name

    def get_dispute_name(self, obj):
        return obj.user.dispute_name.name

    def get_username(self, obj):
        return obj.user.username

    class Meta:
        model = Friends
        fields = ('uid_for_client', 'user_friend', 'statistic_name', 'user', 'is_friend', 'is_ignore', 'username',
                  'dispute_name')