from django.contrib.auth import logout
from django.shortcuts import render

# Create your views here.
def logged(request):
    return render(request, 'core/index.html', {'page_status': 'login'})


def logged_fail(request):
    return render(request, 'core/index.html', {'page_status': 'fail'})


def user_logout(request):
    logout(request)
    return render(request, 'core/index.html', {'page_status': 'logout'})