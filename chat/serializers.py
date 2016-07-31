from rest_framework import serializers

from .models import ManyChatsToManyUsersConnector


class ManyChatsToManyUsersConnectorSerializer(serializers.ModelSerializer):
    chat = serializers.ReadOnlyField(source='chat.name')
    chat_id = serializers.SerializerMethodField()
    user = serializers.ReadOnlyField(source='user.additional_name.chat_name')
    user_id = serializers.SerializerMethodField()

    def get_chat_id(self, obj):
        return obj.chat.id

    def get_user_id(self, obj):
        return obj.user.id

    class Meta:
        model = ManyChatsToManyUsersConnector
        fields = ('chat_id', 'chat', 'user_id', 'user')