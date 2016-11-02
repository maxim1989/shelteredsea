from django.conf.urls import url
from . import views


urlpatterns = [
    url(r'^$', views.AllGames.as_view()),
    url(r'^(?P<namespace>[a-zA-Z0-9]+)$', views.OneGame.as_view()),
    url(r'^orders_for_deal$', views.MyOrder.as_view()),  #url(r'^(?P<namespace>[a-zA-Z0-9]+)/deal_order$', views.Order.as_view()),
    url(r'^orders_for_deal/(?P<pk>[1-9][0-9]*)$', views.Order.as_view()),
    url(r'^temp_deals/(?P<pk>[1-9][0-9]*)$', views.TempD.as_view()),
    url(r'^next_(?P<temp_deal_id>[1-9][0-9]*)$', views.Next.as_view()),
    url(r'^cancel_(?P<order_id>[1-9][0-9]*)$', views.CloseOrder.as_view()),
    url(r'^conditions_opponent_(?P<order_id>[1-9][0-9]*)$', views.Conditions.as_view()),
    url(r'^start_dispute_(?P<order_id>[1-9][0-9]*)$', views.StartDispute.as_view()),
]