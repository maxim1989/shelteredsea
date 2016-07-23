from django.conf.urls import url
from . import views


urlpatterns = [
    url(r'^$', views.logged, name='logged'),
    url(r'^authenticated_user$', views.authenticated_user),
    url(r'^login_fail/$', views.logged_fail, name='logged_fail'),
    url(r'^login-error/$', views.login_error, name='login-error'),
    url(r'^logout/$', views.logout, name='logout'),
]