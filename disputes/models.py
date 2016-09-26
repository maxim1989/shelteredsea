from django.contrib.auth.models import User
from django.db import models

from chat.models import Chat


class Games(models.Model):
    name = models.CharField(max_length=255)
    namespace = models.CharField(max_length=255, unique=True)


class Deals(models.Model):
    steam_game_uid = models.CharField(max_length=255)
    count_of_games = models.PositiveIntegerField()
    left_rate = models.CharField(max_length=255)
    right_rate = models.CharField(max_length=2)
    is_active = models.BooleanField()
    left_count_of_money = models.CharField(max_length=255)
    right_count_of_money = models.CharField(max_length=2)


class TempDeals(models.Model):
    chat = models.OneToOneField(Chat, null=True, on_delete=models.CASCADE)
    steam_game_uid = models.CharField(max_length=255)
    count_of_games = models.PositiveIntegerField()
    left_rate = models.CharField(max_length=255)
    right_rate = models.CharField(max_length=2)
    is_active = models.BooleanField()
    left_count_of_money = models.CharField(max_length=255)
    right_count_of_money = models.CharField(max_length=2)


class OrderForDeal(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    deal = models.ForeignKey(Deals, on_delete=models.CASCADE, null=True)
    temp_deal = models.ForeignKey(TempDeals, on_delete=models.CASCADE, null=True)
    game = models.ForeignKey(Games, on_delete=models.CASCADE)
    is_winner = models.BooleanField(default=False)
    left_rate = models.CharField(max_length=255)
    right_rate = models.CharField(max_length=2)
    rate_trent = models.CharField(max_length=2)
    games_count = models.PositiveIntegerField(null=True)
    team_size = models.PositiveIntegerField(null=True)
    in_negotiations = models.BooleanField(default=False)
    modificate_moment = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField(default=True)


class CanceledNegotiations(models.Model):
    myself = models.ForeignKey(OrderForDeal, on_delete=models.CASCADE, related_name='myself')
    competitor = models.ForeignKey(OrderForDeal, on_delete=models.CASCADE, related_name='competitor')
    create_moment = models.DateTimeField(auto_now=True)