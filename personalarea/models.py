from django.contrib.auth.models import User
from django.db import models

# Create your models here.
class Friends(models.Model):
    myself = models.ForeignKey(User, on_delete=models.CASCADE, related_name='my_friends')
    friend = models.ForeignKey(User, on_delete=models.CASCADE, related_name='i_am_friend')
    is_friend = models.BooleanField(default=False)
    is_ignore = models.BooleanField(default=False)