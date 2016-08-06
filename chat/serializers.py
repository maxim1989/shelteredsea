from rest_framework import serializers

from .models import ManyChatsToManyUsersConnector


class ManyChatsToManyUsersConnectorSerializer(serializers.ModelSerializer):
    chat_name = serializers.SerializerMethodField()
    user_name = serializers.SerializerMethodField()

    def get_chat_name(self, obj):
        return obj.chat.name

    def get_user_name(self, obj):
        return obj.user.additional_name.chat_name

    class Meta:
        model = ManyChatsToManyUsersConnector
        fields = ('chat_name', 'chat', 'user_name', 'user')