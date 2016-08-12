from django.contrib.auth.models import User
from django.db import models

# Create your models here.
class Friends(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='my_friends')
    user_friend = models.ForeignKey(User, on_delete=models.CASCADE, related_name='i_am_friend')
    is_friend = models.BooleanField(default=False)