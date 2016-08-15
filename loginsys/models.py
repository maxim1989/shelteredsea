from django.contrib.auth.models import User
from django.db import models


class AdditionalName(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='additional_name')
    chat_name = models.CharField(max_length=255, blank=True)
    dispute_name = models.CharField(max_length=255, blank=True)


class AdditionalUuid(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='additional_uuid')
    uid_for_client = models.TextField(null=True)