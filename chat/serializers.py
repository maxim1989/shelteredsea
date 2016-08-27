from rest_framework import serializers

from loginsys.serializers import AuthenticatedUserSerializer
from .models import Chat, ManyChatsToManyUsersConnector, Message


class ChatSerializer(serializers.ModelSerializer):
    class Meta:
        model = Chat
        fields = ('name', 'id')


class ManyChatsToManyUsersConnectorSerializer(serializers.ModelSerializer):
    chat_name = serializers.SerializerMethodField()
    statistic_name = serializers.SerializerMethodField()
    dispute_name = serializers.SerializerMethodField()
    username = serializers.SerializerMethodField()

    def get_chat_name(self, obj):
        return obj.chat.name

    def get_statistic_name(self, obj):
        return obj.user.statistic_name.name

    def get_dispute_name(self, obj):
        return obj.user.dispute_name.name

    def get_username(self, obj):
        return obj.user.username

    class Meta:
        model = ManyChatsToManyUsersConnector
        fields = ('chat_name', 'chat', 'statistic_name', 'user', 'dispute_name', 'username')


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