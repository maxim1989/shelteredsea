from rest_framework import serializers

from disputes.models import Games


class GamesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Games
        fields = ('name', 'namespace')