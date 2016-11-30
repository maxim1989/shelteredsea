from django.contrib.auth.models import User
from django.db import models

from chat.models import Chat


class Games(models.Model):
    name = models.CharField(max_length=255)
    namespace = models.CharField(max_length=255, unique=True)
    appid = models.CharField(max_length=255, unique=True)


class Deals(models.Model):
    is_active = models.BooleanField(default=True)
    created = models.DateTimeField(auto_now_add=True)
    is_failed = models.BooleanField(default=False)


class SteamGame(models.Model):
    deal = models.ForeignKey(Deals, on_delete=models.CASCADE, related_name='matches')
    steam_game_uid = models.CharField(max_length=255)


class TempDeals(models.Model):
    chat = models.OneToOneField(Chat, null=True, on_delete=models.CASCADE)
    is_active = models.BooleanField()


class OrderForDeal(models.Model):
    deal = models.ForeignKey(Deals, on_delete=models.CASCADE, null=True, related_name='deal_sides')
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    temp_deal = models.ForeignKey(TempDeals, on_delete=models.CASCADE, null=True, related_name='orders')
    game = models.ForeignKey(Games, on_delete=models.CASCADE)
    is_winner = models.BooleanField(default=False)
    rate_left = models.IntegerField(default=10000)
    rate_right = models.IntegerField(default=100000)
    rate = models.IntegerField(null=True)
    games_count = models.PositiveIntegerField(null=True)
    team_size = models.PositiveIntegerField(null=True)
    in_negotiations = models.BooleanField(default=False)
    modificate_moment = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField(default=True)


class Participants(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    order = models.ForeignKey(OrderForDeal, on_delete=models.CASCADE, related_name='participants')


class CanceledNegotiations(models.Model):
    myself = models.ForeignKey(OrderForDeal, on_delete=models.CASCADE, related_name='myself')
    competitor = models.ForeignKey(OrderForDeal, on_delete=models.CASCADE, related_name='competitor')
    create_moment = models.DateTimeField(auto_now=True)