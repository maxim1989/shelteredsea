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
    uid_for_client = models.TextField(null=True)