from django.contrib import auth
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.core.urlresolvers import reverse
from django.http import HttpResponse
from django.shortcuts import HttpResponseRedirect, render
# from django.views.decorators.csrf import ensure_csrf_cookie
from django.views.decorators.csrf import  csrf_exempt

# from rest_framework.parsers import JSONParser
from rest_framework.renderers import JSONRenderer

from auth.serializers import AuthenticatedUserSerializer


def logged(request):
    return render(request, 'core/index.html')


def login_error(request):
    return HttpResponseRedirect(reverse('home'))


def logged_fail(request):
    return HttpResponseRedirect(reverse('home'))


def logout(request):
    auth.logout(request)
    return JSONResponse(data=dict(), is_autorized=False)


class JSONResponse(HttpResponse):
    """
    An HttpResponse that renders its content into JSON.
    """
    def __init__(self, data, **kwargs):
        data['is_autorized'] = kwargs.get('is_autorized', True)
        content = JSONRenderer().render(data)
        kwargs['content_type'] = 'application/json'
        super(JSONResponse, self).__init__(content, **kwargs)


# @ensure_csrf_cookie
@csrf_exempt
@login_required
def authenticated_user(request):
    """
    Получить сведения об авторизированном пользователе
    :param request:
    :return: данные пользователя
    """
    if request.method == 'GET':
        user_id = request.user.id
        user = User.objects.get(pk=user_id)
        serializer = AuthenticatedUserSerializer(data=user)
        return JSONResponse(data=serializer.data)


def not_authenticated(request):
    """
    Если пользователь not_authenticated то приходим сюда, за счёт декоратора login_required
    :param request:
    :return:
    """
    return JSONResponse(data=dict(), is_autorized=False)