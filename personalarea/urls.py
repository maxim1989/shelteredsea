from django.conf.urls import url
from . import views


urlpatterns = [
    url(r'^$', views.FriendsList.as_view()),
    url(r'^(?P<uid_for_client>[0-9]+)$', views.FindUser.as_view()),
]