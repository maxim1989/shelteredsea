from __future__ import absolute_import

import os

import requests
from celery import shared_task


@shared_task
def test():
    print("Test********************")
    url = 'http://api.steampowered.com/IDOTA2Match_570/GetMatchHistory/v1?key={0}'.format(os.environ.get('SOCIAL_AUTH_STEAM_API_KEY'))
    response = requests.get(url)
    print(response.text)
    print(type(response.text))
