from rest_framework import serializers

from loginsys.serializers import AuthenticatedUserSerializer
from .models import Chat, ManyChatsToManyUsersConnector, Message


class ChatSerializer(serializers.ModelSerializer):
    class Meta:
        model = Chat
        fields = ('name', 'id')


class ManyChatsToManyUsersConnectorSerializer(serializers.ModelSerializer):
    chat = ChatSerializer()
    user = AuthenticatedUserSerializer()

    class Meta:
        model = ManyChatsToManyUsersConnector
        fields = ('chat', 'user')


class MessageSerializer(serializers.ModelSerializer):
    user = AuthenticatedUserSerializer()
    chat = ChatSerializer()

    class Meta:
        model = Message
        fields = ('id', 'message', 'creation_datetime', 'chat', 'user')

    def create(self, validated_data):
        message = validated_data.get('message')
        chat_object = self.context.get('chat_object')
        user_object = self.context.get('user_object')
        message_instance = Message(chat=chat_object, user=user_object, message=message)
        message_instance.save()
        return message_instance