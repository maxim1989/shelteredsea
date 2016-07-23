from django.contrib.auth.models import User

from rest_framework import serializers


class AuthenticatedUserSerializer(serializers.ModelSerializer):
    provider = serializers.CharField(source='usersocialauth.provider')

    class Meta:
        model = User
        fields = ('id', 'last_login', 'is_superuser', 'username', 'first_name', 'last_name', 'email',
                  'is_staff', 'is_active', 'date_joined', 'provider')