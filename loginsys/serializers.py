from django.contrib.auth.models import User

from rest_framework import serializers


class AuthenticatedUserSerializer(serializers.ModelSerializer):
    uid_for_client = serializers.SerializerMethodField()
    chat_name = serializers.SerializerMethodField()

    def get_uid_for_client(self, obj):
        return obj.additional_uuid.uid_for_client

    def get_chat_name(self, obj):
        return obj.additional_name.chat_name

    class Meta:
        model = User
        fields = ('id', 'last_login', 'is_superuser', 'username', 'first_name', 'last_name', 'email',
                  'is_staff', 'is_active', 'date_joined', 'uid_for_client', 'chat_name')