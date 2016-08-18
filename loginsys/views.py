import copy
import random
import uuid

from django.contrib import auth
from django.contrib.auth.models import User
from django.core.urlresolvers import reverse
from django.shortcuts import HttpResponseRedirect, render
from rest_framework import permissions
from rest_framework.decorators import api_view, permission_classes
from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response
from rest_framework.views import APIView

from loginsys.models import AdditionalUuid, DisputeName, StatisticSame
from loginsys.serializers import AuthenticatedUserSerializer
from loginsys.towns import towns


def add_name(request_object):
    statistic_name = StatisticSame.objects.filter(user=request_object.user.id)
    if not statistic_name:
        engaged_names = [u.chat_name for u in StatisticSame.objects.all()]
        counter = 0
        while True:
            new_name = random.choice(towns)
            if counter > 100:
                new_name = new_name + str(counter)
            if new_name not in engaged_names:
                user = User.objects.get(pk=request_object.user.id)
                appended_name = StatisticSame(name=new_name, user=user)
                appended_name.save()
                break
            else:
                continue
    dispute_name = DisputeName.objects.filter(user=request_object.user.id)
    if not dispute_name:
        user = User.objects.get(pk=request_object.user.id)
        appended_name = DisputeName(name='', user=user)
        appended_name.save()


def add_uid(request_object):
    additional_uuid = AdditionalUuid.objects.filter(user=request_object.user.id)
    if not additional_uuid:
        uid = uuid.uuid1()
        uid = uid.int
        uid_for_client = str(uid >> 64)
        user = User.objects.get(pk=request_object.user.id)
        appended_uuid = AdditionalUuid(uid_for_client=uid_for_client, user=user)
        appended_uuid.save()


def append_additional_parameters(request_object):
    add_name(request_object)
    add_uid(request_object)


def logged(request):
    append_additional_parameters(request)
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