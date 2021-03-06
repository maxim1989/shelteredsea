from django.contrib.auth.models import User
from django.db import models


class StatisticSame(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='statistic_name')
    name = models.CharField(max_length=255, blank=True)


class DisputeName(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='dispute_name')
    name = models.CharField(max_length=255, blank=True)


class AdditionalUuid(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='uid_for_client')
    name = models.CharField(max_length=7, null=True)
    series = models.PositiveIntegerField(null=True)
    number = models.PositiveIntegerField(null=True)

    def save(self, *args, **kwargs):
        number = str(self.number)
        zero_count = 6 - len(number)
        while zero_count:
            number = '0' + number
            zero_count -= 1
        self.name = str(self.series) + number
        super(AdditionalUuid, self).save(*args, **kwargs)


class UserBalance(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='balance')
    balance = models.IntegerField(default=40000)
    frozen_balance = models.IntegerField(default=0)
    withdrawn_balance = models.IntegerField(default=0)