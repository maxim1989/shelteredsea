from django.contrib import auth
from django.contrib.auth.models import User
from django.core.urlresolvers import reverse
from django.http import HttpResponse
from django.shortcuts import HttpResponseRedirect, render
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
    return JSONResponse(dict(), is_autorized=False)


class JSONResponse(HttpResponse):
    """
    An HttpResponse that renders its content into JSON.
    """
    def __init__(self, data, **kwargs):
        data['is_autorized'] = kwargs.pop('is_autorized')
        content = JSONRenderer().render(data)
        kwargs['content_type'] = 'application/json'
        super(JSONResponse, self).__init__(content, **kwargs)


def authenticated_user(request):
    """
    Получить сведения об авторизированном пользователе
    :param request:
    :return: данные пользователя
    """
    if request.method == 'GET':
        if request.user.is_authenticated():
            user_id = request.user.id
            user = User.objects.get(pk=user_id)
            serializer = AuthenticatedUserSerializer(user)
            return JSONResponse(serializer.data, is_autorized=True)
        else:
            return JSONResponse(dict(), is_autorized=False)