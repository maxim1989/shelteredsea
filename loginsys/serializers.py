from django.contrib.auth.models import User

from rest_framework import serializers

from loginsys.models import AdditionalUuid, DisputeName, StatisticSame


class AdditionalUuidSerializer(serializers.ModelSerializer):
    class Meta:
        model = AdditionalUuid
        fields = ('uid_for_client',)


class DisputeNameSerializer(serializers.ModelSerializer):
    class Meta:
        model = DisputeName
        fields = ('name',)


class StatisticNameSerializer(serializers.ModelSerializer):
    class Meta:
        model = StatisticSame
        fields = ('name',)


class AuthenticatedUserSerializer(serializers.ModelSerializer):
    uid_for_client = AdditionalUuidSerializer()
    statistic_name = StatisticNameSerializer()
    dispute_name = StatisticNameSerializer()

    class Meta:
        model = User
        fields = ('id', 'last_login', 'is_superuser', 'username', 'first_name', 'last_name', 'email',
                  'is_staff', 'is_active', 'date_joined', 'uid_for_client', 'statistic_name', 'dispute_name')

    def update(self, instance, validated_data):
        dispute_name = validated_data.get('dispute_name', {})
        dispute_name = dispute_name.get('name', instance.dispute_name.name)
        instance.dispute_name.name = dispute_name
        instance.save()
        return instance