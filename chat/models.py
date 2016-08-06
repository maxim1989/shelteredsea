from django.conf import settings
from django.contrib.auth.models import User
from django.db import models


class Chat(models.Model):
    name = models.CharField(max_length=255)


class ManyChatsToManyUsersConnector(models.Model):
    chat = models.ForeignKey(Chat, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)


class Message(models.Model):
    chat = models.ForeignKey(Chat, on_delete=models.CASCADE)
    user = models.OneToOneField(User, on_delete=models.SET_NULL, null=True)
    message = models.TextField()
    creation_datetime = models.DateTimeField(auto_now_add=True)