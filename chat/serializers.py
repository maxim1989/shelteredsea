from rest_framework import serializers

from .models import ManyChatsToManyUsersConnector


class ManyChatsToManyUsersConnectorSerializer(serializers.ModelSerializer):
    chat_name = serializers.ReadOnlyField(source='chat.name')
    user_name = serializers.ReadOnlyField(source='user.additional_name.chat_name')

    class Meta:
        model = ManyChatsToManyUsersConnector
        fields = ('chat_name', 'chat', 'user_name', 'user')