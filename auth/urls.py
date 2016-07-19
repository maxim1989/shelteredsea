from django.conf.urls import url
from . import views


urlpatterns = [
    url(r'^$', views.logged, name='logged'),
    url(r'^logout/$', views.logout, name='logout'),
]