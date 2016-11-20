from __future__ import absolute_import

import datetime
# import os

# import requests
from celery import shared_task

from disputes.models import Deals, OrderForDeal
# from social.apps.django_app.default.models import UserSocialAuth


@shared_task
def test():
    deals = Deals.objects.filter(is_active=True)
    for deal in deals:
        # deal_time_stamp = (deal.created - datetime.datetime(1970, 1, 1, tzinfo=datetime.timezone.utc)).total_seconds()
        # print(deal_time_stamp)
        interval = datetime.datetime.now(datetime.timezone.utc) - deal.created
        if interval.total_seconds() > 300:
            orders = OrderForDeal.objects.filter(deal=deal)
            deal.is_active = False
            deal.save()
            for order in orders:
                # steam_id = UserSocialAuth.objects.get(user_id=order.user.id)
                # steam_id_32 = int(steam_id.uid) & ((1 << 32) - 1)
                # url = 'http://api.steampowered.com/IDOTA2Match_570/GetMatchHistory/v1?key={0}&date_min={1}&account_id={2}'.format(
                #     os.environ.get('SOCIAL_AUTH_STEAM_API_KEY'), deal_time_stamp, steam_id_32
                # )
                # response = requests.get(url)
                # print(response.text)
                order.is_active = False
                order.save()