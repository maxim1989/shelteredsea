import copy
import random

from django.conf import settings
from django.contrib import auth
from django.contrib.auth.models import User
from django.core.urlresolvers import reverse
from django.shortcuts import HttpResponseRedirect, render
from rest_framework import permissions
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.views import APIView

from loginsys.models import AdditionalUuid, DisputeName, StatisticSame, UserBalance
from loginsys.serializers import AuthenticatedUserSerializer
from loginsys.towns import towns


def add_name(request_object):
    statistic_name = StatisticSame.objects.filter(user=request_object.user.id)
    if not statistic_name:
        engaged_names = [u.name for u in StatisticSame.objects.all()]
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
        try:
            max_exists_uuid = AdditionalUuid.objects.order_by('-series').order_by('-number')[0]
        except IndexError:
            next_uuid_series = settings._UID_SERIES
            next_uuid_number = 0
        else:
            if max_exists_uuid.number < 999999:
                next_uuid_series = max_exists_uuid.series
                next_uuid_number = max_exists_uuid.number + 1
            else:
                # next_uuid_series = max_exists_uuid.series + 1
                next_uuid_series = max_exists_uuid.series
                next_uuid_number = 0
                raise RuntimeError('Uuids finished')
        user = User.objects.get(pk=request_object.user.id)
        appended_uuid = AdditionalUuid(series=next_uuid_series, number=next_uuid_number, user=user)
        appended_uuid.save()


def add_balance(request_object):
    balance = UserBalance.objects.filter(user=request_object.user.id)
    if not balance:
        user = User.objects.get(pk=request_object.user.id)
        UserBalance.objects.create(user=user, balance='40000')


def append_additional_parameters(request_object):
    add_name(request_object)
    add_uid(request_object)
    add_balance(request_object)


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
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)

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