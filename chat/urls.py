from django.conf.urls import url
from . import views


urlpatterns = [
    url(r'^$', views.ChatList.as_view()),
    url(r'^(?P<chat>[0-9]+)$', views.SendMessage.as_view()),
    url(r'^(?P<chat>[0-9]+)/new$', views.LastMessages.as_view()),
    # url(r'^authenticated_user$', views.AuthenticatedUser.as_view()),
]