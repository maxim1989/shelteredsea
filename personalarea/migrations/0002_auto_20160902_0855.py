# -*- coding: utf-8 -*-
# Generated by Django 1.9.7 on 2016-09-02 08:55
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('personalarea', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='friends',
            old_name='user_friend',
            new_name='friend',
        ),
        migrations.RenameField(
            model_name='friends',
            old_name='user',
            new_name='myself',
        ),
    ]
