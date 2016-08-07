from django.conf.urls import url
from . import views


urlpatterns = [
    url(r'^$', views.ChatList.as_view()),
    # url(r'^authenticated_user$', views.AuthenticatedUser.as_view()),
]