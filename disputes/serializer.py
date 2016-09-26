from rest_framework import serializers

from disputes.models import Games, OrderForDeal


class GamesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Games
        fields = ('name', 'namespace')


class OrderForDealSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderForDeal
        fields = ('user', 'deal', 'temp_deal', 'game', 'is_winner', 'left_rate', 'right_rate', 'rate_trent',
                  'games_count', 'team_size', 'in_negotiations', 'modificate_moment', 'is_active')

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