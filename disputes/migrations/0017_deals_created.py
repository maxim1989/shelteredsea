# -*- coding: utf-8 -*-
# Generated by Django 1.9.7 on 2016-11-08 16:55
from __future__ import unicode_literals

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('disputes', '0016_auto_20161107_1640'),
    ]

    operations = [
        migrations.AddField(
            model_name='deals',
            name='created',
            field=models.DateTimeField(auto_now_add=True, default=datetime.datetime(2016, 11, 8, 16, 55, 0, 352823, tzinfo=utc)),
            preserve_default=False,
        ),
    ]