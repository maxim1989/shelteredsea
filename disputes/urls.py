from django.conf.urls import url
from . import views


urlpatterns = [
    url(r'^$', views.Game.as_view()),
    url(r'^(?P<namespace>[a-zA-Z0-9]+)$', views.Dispute.as_view())
]