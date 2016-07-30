import copy

from django.contrib import auth
from django.contrib.auth.models import User
from django.core.urlresolvers import reverse
from django.shortcuts import HttpResponseRedirect, render
from rest_framework import permissions
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.views import APIView

from auth.serializers import AuthenticatedUserSerializer


def logged(request):
    return render(request, 'core/index.html')


def login_error(request):
    return HttpResponseRedirect(reverse('home'))


def logged_fail(request):
    return HttpResponseRedirect(reverse('home'))


@api_view(['GET'])
@permission_classes((permissions.IsAuthenticated,))
def logout(request):
    auth.logout(request)
    return HttpResponseRedirect(reverse('home'))


class AuthenticatedUser(APIView):
    """
    Получить сведения об авторизированном пользователе
    """
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