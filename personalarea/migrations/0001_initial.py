# -*- coding: utf-8 -*-
# Generated by Django 1.9.7 on 2016-08-06 19:03
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Friends',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='my_friends', to=settings.AUTH_USER_MODEL)),
                ('user_friend', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='i_am_friend', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
