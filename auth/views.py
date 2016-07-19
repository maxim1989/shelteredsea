from django.contrib import auth
from django.core.urlresolvers import reverse
from django.shortcuts import HttpResponseRedirect, render

# Create your views here.
def logged(request):
    return render(request, 'core/index.html')


def login_error(request):
    print(vars(request))
    return HttpResponseRedirect(reverse('home'))


def logged_fail(request):
    print(vars(request))
    return HttpResponseRedirect(reverse('home'))


def logout(request):
    auth.logout(request)
    return HttpResponseRedirect(reverse('home'))