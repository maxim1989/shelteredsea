from django.contrib import auth
from django.core.urlresolvers import reverse
from django.shortcuts import HttpResponseRedirect, render

from social.apps.django_app.middleware import SocialAuthExceptionMiddleware

# Create your views here.
def logged(request):
    return render(request, 'core/index.html')


def login_error(request):
    return HttpResponseRedirect(reverse('home'))


def logged_fail(request):
    return HttpResponseRedirect(reverse('home'))


def logout(request):
    auth.logout(request)
    return HttpResponseRedirect(reverse('home'))