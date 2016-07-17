from django.contrib import auth
from django.core.urlresolvers import reverse
from django.shortcuts import HttpResponseRedirect, render

# Create your views here.
def logged(request):
    print('logged')
    print(request.user.is_authenticated())

    return render(request, 'core/index.html')


def logged_fail(request):
    return HttpResponseRedirect(reverse('home'))


def logout(request):
    auth.logout(request)
    return HttpResponseRedirect(reverse('home'))