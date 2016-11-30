from datetime import datetime

from django.utils import timezone as django_timezone
from rest_framework import serializers

from chat.models import Chat, ManyChatsToManyUsersConnector
from chat.serializers import ChatSerializer
from loginsys.serializers import AuthenticatedUserSerializer
from disputes.models import CanceledNegotiations, Deals, Games, OrderForDeal, Participants, SteamGame, TempDeals


class GamesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Games
        fields = ('id', 'name', 'namespace', 'appid')


class ParticipantsSerializer(serializers.ModelSerializer):
    user = AuthenticatedUserSerializer()
    class Meta:
        model = Participants
        fields = ('id', 'user', 'order')


class Deals_2_Serializer(serializers.ModelSerializer):
    created_in_seconds = serializers.SerializerMethodField()

    class Meta:
        model = Deals
        fields = ('id', 'is_active', 'created', 'created_in_seconds', 'is_failed')

    def get_created_in_seconds(self, obj):
        if obj.created:
            return (django_timezone.now() - obj.created).total_seconds()
        return

class OrderForDealSerializer(serializers.ModelSerializer):
    participants = ParticipantsSerializer(many=True)
    game = GamesSerializer()
    user = AuthenticatedUserSerializer()
    deal = Deals_2_Serializer()
    modification_in_seconds = serializers.SerializerMethodField()

    class Meta:
        model = OrderForDeal
        fields = ('id', 'user', 'deal', 'temp_deal', 'game', 'is_winner', 'games_count', 'team_size',
                  'in_negotiations', 'modificate_moment', 'is_active', 'participants', 'rate_left',
                  'rate_right', 'rate', 'modification_in_seconds')

    def update(self, instance, validated_data):
        if instance.temp_deal:
            OrderForDeal.objects.filter(temp_deal=instance.temp_deal).exclude(user=self.context.get('user')).\
                update(temp_deal=validated_data.get('temp_deal', instance.temp_deal),
                       in_negotiations=validated_data.get('in_negotiations', instance.in_negotiations))
            instance.temp_deal.is_active = False
            instance.temp_deal.save()
        instance.is_active = validated_data.get('is_active', instance.is_active)
        instance.temp_deal = validated_data.get('temp_deal', instance.temp_deal)
        instance.in_negotiations = validated_data.get('in_negotiations', instance.in_negotiations)
        instance.save()
        return instance

    def get_modification_in_seconds(self, obj):
        return (django_timezone.now() - obj.modificate_moment).total_seconds()


class OrderForDealCreateUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderForDeal
        fields = ('id', 'temp_deal', 'is_winner', 'games_count', 'team_size', 'in_negotiations', 'modificate_moment',
                  'is_active', 'rate_left', 'rate_right', 'rate')

    def create(self, validated_data):
        rate_left = validated_data.get('rate_left', 10000)
        rate_right = validated_data.get('rate_right', 100000)
        rate = validated_data.get('rate')
        games_count = validated_data.get('games_count')
        team_size = validated_data.get('team_size')
        myself = self.context.get('myself')
        game = self.context.get('game')
        instance = OrderForDeal.objects.create(game=game, user=myself, rate_left=rate_left, rate_right=rate_right,
                                               rate=rate, games_count=games_count, team_size=team_size)
        Participants.objects.create(user=myself, order=instance)
        return instance

    def update(self, instance, validated_data):
        instance.rate_left = validated_data.get('rate_left', instance.rate_left)
        instance.rate_right = validated_data.get('rate_right', instance.rate_right)
        instance.rate = validated_data.get('rate', instance.rate)
        instance.games_count = validated_data.get('games_count', instance.games_count)
        instance.team_size = validated_data.get('team_size', instance.team_size)
        instance.save()
        return instance


class TempDealsSerializer(serializers.ModelSerializer):
    orders = OrderForDealSerializer(many=True)
    chat = ChatSerializer()

    class Meta:
        model = TempDeals
        fields = ('id', 'chat', 'is_active', 'orders')

    def create(self, validated_data):
        name = datetime.now().strftime("%H:%M|%d-%m-%Y")
        chat = Chat.objects.create(name=name)
        temp_deal = TempDeals.objects.create(chat=chat, **validated_data)
        for uid in self.context.get('uids', []):
            order = OrderForDeal.objects.get(pk=uid)
            order.in_negotiations = self.context.get('in_negotiations', True)
            order.temp_deal = temp_deal
            order.save()
            participants = Participants.objects.filter(order=order)
            for participant in participants:
                ManyChatsToManyUsersConnector.objects.create(user=participant.user, chat=chat)
        return temp_deal

    def update(self, instance, validated_data):
        instance.is_active = validated_data.get('is_active', instance.is_active)
        instance.save()
        orders = OrderForDeal.objects.filter(temp_deal=instance)
        for order in orders:
            order.in_negotiations = instance.is_active
            if not order.in_negotiations:
                order.temp_deal = None
                order.deal = None
            order.save()

            for order_2 in orders:
                if order != order_2:
                    try:
                        me = CanceledNegotiations.objects.get(myself=order)
                        me.save()
                    except CanceledNegotiations.DoesNotExist:
                        CanceledNegotiations.objects.create(myself=order, competitor=order_2)
        return instance


class SteamGameSerializer(serializers.ModelSerializer):
    class Meta:
        model = SteamGame
        fields = ('id', 'steam_game_uid')


class DealsSerializer(serializers.ModelSerializer):
    deal_sides = OrderForDealSerializer(many=True)
    matches = SteamGameSerializer(many=True)

    created_in_seconds = serializers.SerializerMethodField()

    class Meta:
        model = Deals
        fields = ('id', 'is_active', 'deal_sides', 'matches', 'created_in_seconds', 'is_failed')

    def create(self, validated_data):
        deal = Deals.objects.create()
        self.context.get('me').deal = deal
        self.context.get('me').save()
        return deal

    def get_created_in_seconds(self, obj):
        if obj.created:
            return (django_timezone.now() - obj.created).total_seconds()
        return
