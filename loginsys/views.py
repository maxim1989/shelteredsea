import copy
import random

from django.contrib import auth
from django.contrib.auth.models import User
from django.core.urlresolvers import reverse
from django.shortcuts import HttpResponseRedirect, render
from rest_framework import permissions
from rest_framework.decorators import api_view, permission_classes
from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response
from rest_framework.views import APIView

from loginsys.models import AdditionalName
from loginsys.serializers import AuthenticatedUserSerializer
from loginsys.towns import towns


def logged(request):
    user = User.objects.get(pk=request.user.id)
    if not user.additional_name.chat_name:
        engaged_names = [u.chat_name for u in AdditionalName.objects.all()]
        counter = 0
        while True:
            new_name = random.choice(towns)
            if counter > 100:
                new_name = new_name + str(counter)
            if new_name not in engaged_names:
                user.additional_name.chat_name = new_name
                break
            else:
                continue
    return render(request, 'core/index.html')


def login_error(request):
    return HttpResponseRedirect(reverse('home'))


def logged_fail(request):
    return HttpResponseRedirect(reverse('home'))


@api_view(['GET'])
@permission_classes((permissions.IsAuthenticated,))
def logout(request):
    """
    Выход, только из авторизированного режима
    :param request:
    :return: редирект на домашнюю страницу
    """
    auth.logout(request)
    return HttpResponseRedirect(reverse('home'))


class AuthenticatedUser(APIView):
    """
    Получить сведения об авторизированном пользователе
    """
    renderer_classes = (JSONRenderer,)

    def get(self, request):
        if request.user.is_authenticated():
            user_id = request.user.id
            user = User.objects.get(pk=user_id)
            serializer = AuthenticatedUserSerializer(user)
            data = copy.deepcopy(serializer.data)
            data['is_autorized'] = True
            return Response(data)
        else:
            return Response(dict(is_autorized=False))