from django.conf.urls import url
from . import views


urlpatterns = [
    url(r'^$', views.Game.as_view()),
    url(r'^(?P<namespace>[a-zA-Z0-9]+)$', views.Order.as_view()),
    url(r'^next_(?P<temp_deal_id>[1-9][0-9]*)$', views.Next.as_view())
    # url(r'^order$', views.Dispute.as_view())
]