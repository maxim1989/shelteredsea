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
    count_not_read_messages = serializers.SerializerMethodField()

    def get_count_not_read_messages(self, obj):
        if self.context.get('users_in_my_chats') and self.context.get('myself'):
            users_in_my_chats = self.context.get('users_in_my_chats')
            myself = self.context.get('myself')
            for chat in users_in_my_chats:
                not_read_messages = Message.objects.filter(chat=chat.chat_id).exclude(user=myself).filter(is_read=False)
                return len(not_read_messages)
        else:
            return

    class Meta:
        model = ManyChatsToManyUsersConnector
        fields = ('chat', 'user', 'count_not_read_messages')


class MessageSerializer(serializers.ModelSerializer):
    user = AuthenticatedUserSerializer()
    chat = ChatSerializer()

    class Meta:
        model = Message
        fields = ('id', 'message', 'creation_datetime', 'chat', 'user', 'is_read')

    def create(self, validated_data):
        message = validated_data.get('message')
        chat_object = self.context.get('chat_object')
        user_object = self.context.get('user_object')
        message_instance = Message(chat=chat_object, user=user_object, message=message)
        message_instance.save()
        return message_instance