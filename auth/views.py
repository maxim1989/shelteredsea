from django.contrib import auth
from django.core.urlresolvers import reverse
from django.shortcuts import HttpResponseRedirect, render, redirect

# Create your views here.
def logged(request):
    return render(request, 'core/index.html', {'page_status': 'login'})


def logged_fail(request):
    return HttpResponseRedirect(reverse('home'))


def logout(request):
    # return render(request, 'core/index.html', {'page_status': 'login'})
    auth.logout(request)
    return HttpResponseRedirect('/')