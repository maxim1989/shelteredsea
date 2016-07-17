from django.conf.urls import url
from . import views


urlpatterns = [
    url(r'^$', views.logged, name='logged'),
    url(r'^login_fail/$', views.logged_fail, name='logged_fail'),
    url(r'^logout/$', views.logout, name='logout'),
]