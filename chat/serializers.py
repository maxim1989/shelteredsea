from rest_framework import serializers

from .models import ManyChatsToManyUsersConnector


class ManyChatsToManyUsersConnectorSerializer(serializers.ModelSerializer):
    chat_name = serializers.SerializerMethodField()
    statistic_name = serializers.SerializerMethodField()
    dispute_name = serializers.SerializerMethodField()
    username = serializers.SerializerMethodField()

    def get_chat_name(self, obj):
        return obj.chat.name

    def get_statistic_name(self, obj):
        return obj.user.additional_name.chat_name

    def get_dispute_name(self, obj):
        return obj.user.additional_name.dispute_name

    def get_username(self, obj):
        return obj.user.username

    class Meta:
        model = ManyChatsToManyUsersConnector
        fields = ('chat_name', 'chat', 'statistic_name', 'user', 'dispute_name', 'username')