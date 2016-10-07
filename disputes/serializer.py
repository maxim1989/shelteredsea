from datetime import datetime

from rest_framework import serializers

from chat.models import Chat, ManyChatsToManyUsersConnector
from disputes.models import CanceledNegotiations, Games, OrderForDeal, TempDeals


class GamesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Games
        fields = ('id', 'name', 'namespace')


class OrderForDealSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderForDeal
        fields = ('id', 'user', 'deal', 'temp_deal', 'game', 'is_winner', 'games_count', 'team_size',
                  'in_negotiations', 'modificate_moment', 'is_active', 'integer_part_from', 'fractional_part_from',
                  'integer_part_to', 'fractional_part_to')

    def create(self, validated_data):
        left_rate = validated_data.get('left_rate')
        right_rate = validated_data.get('right_rate')
        rate_trent = validated_data.get('rate_trent')
        games_count = validated_data.get('games_count')
        team_size = validated_data.get('team_size')
        myself = self.context.get('myself')
        game = self.context.get('game')
        instance = OrderForDeal(game=game, user=myself, left_rate=left_rate, right_rate=right_rate,
                                rate_trent=rate_trent, games_count=games_count, team_size=team_size)
        instance.save()
        return instance

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


class TempDealsSerializer(serializers.ModelSerializer):
    orders = OrderForDealSerializer(many=True)

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
            ManyChatsToManyUsersConnector.objects.create(user=order.user, chat=chat)
        return temp_deal

    def update(self, instance, validated_data):
        instance.is_active = validated_data.get('is_active', instance.is_active)
        instance.save()
        orders = OrderForDeal.objects.filter(temp_deal=instance)
        for order in orders:
            order.in_negotiations = False if instance.is_active == False else True
            if not order.in_negotiations:
                order.temp_deal = None
            order.save()

            for order_2 in orders:
                if order != order_2:
                    try:
                        me = CanceledNegotiations.objects.get(myself=order)
                        me.save()
                    except CanceledNegotiations.DoesNotExist:
                        CanceledNegotiations.objects.create(myself=order, competitor=order_2)
        return instance