from datetime import timedelta

from django.contrib.auth.models import User
from django.db.models import Q
from django.utils import timezone
from rest_framework import permissions, status
from rest_framework.response import Response
from rest_framework.views import APIView

from disputes.models import Deals, Games, OrderForDeal, TempDeals
from disputes.serializer import DealsSerializer, GamesSerializer, OrderForDealSerializer, \
    OrderForDealCreateUpdateSerializer, TempDealsSerializer


class AllGames(APIView):
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)

    def get(self, request):
        games = Games.objects.all()
        serializer = GamesSerializer(games, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class OneGame(APIView):
    def get(self, request, namespace):
        try:
            game = Games.objects.get(namespace=namespace)
        except Games.DoesNotExist as err:
            return Response({'success': False, 'error': str(err)}, status=status.HTTP_403_FORBIDDEN)
        serializer = GamesSerializer(game)
        return Response(serializer.data, status=status.HTTP_200_OK)


def find_competitor(request, game, me):
    interval = timedelta(seconds=600)
    common_part = OrderForDeal.objects.exclude(user=request.user.id).\
        filter(in_negotiations=False, is_active=True, game=game.id).\
        filter(Q(myself__isnull=True) | Q(myself__create_moment__lt=timezone.now() - interval)).order_by('modificate_moment')
    # TODO надо подумать над фильтрами
    strict_filter = [item.id for item in common_part
                     if int(item.rate_left) >= int(me.rate_left) and
                        int(item.rate_right) <= int(me.rate_right) and
                        item.games_count == me.games_count and
                        item.team_size == me.team_size]
    light_filter = [item.id for item in common_part
                    if item.id not in strict_filter and
                       int(item.rate_left) >= int(me.rate_left) and
                       int(item.rate_right) <= int(me.rate_right) or
                       item.games_count == me.games_count or
                       item.team_size == me.team_size
                    ]

    total_data = strict_filter + light_filter
    return total_data[0] if total_data else 0


class MyOrder(APIView):
    def get(self, request):
        result_list = list()
        my_orders_for_deal = OrderForDeal.objects.filter(user=request.user.id).filter(is_active=True).\
            order_by('modificate_moment')
        for my_order in my_orders_for_deal:
            serializer_my_order = OrderForDealSerializer(my_order)
            competitor_id = find_competitor(request, my_order.game, my_order)
            if competitor_id:
                serializer_temp_deal = TempDealsSerializer(
                    data={'is_active': True},
                    partial=True,
                    context={'uids': [my_order.id, competitor_id], 'in_negotiations': True})
                if serializer_temp_deal.is_valid():
                    serializer_temp_deal.save()
                    result_list.append(serializer_my_order.data)
                result_list.append(serializer_my_order.data)
            result_list.append(serializer_my_order.data)
        return Response(result_list, status=status.HTTP_200_OK)

    def post(self, request):
        try:
            game = Games.objects.get(namespace=request.data.get('namespace'))
            myself = User.objects.get(pk=request.user.id)
        except Games.DoesNotExist as err:
            return Response({'success': False, 'error': str(err)}, status=status.HTTP_403_FORBIDDEN)
        except User.DoesNotExist as err:
            return Response({'success': False, 'error': str(err)}, status=status.HTTP_403_FORBIDDEN)

        find_order = OrderForDeal.objects.filter(user=myself, game=game, is_active=True)
        if find_order:
            return Response({'success': True, 'data': 'already_exist'}, status=status.HTTP_200_OK)

        serializer = OrderForDealCreateUpdateSerializer(data=request.data, partial=True,
                                                        context={'myself': myself, 'game': game})
        if serializer.is_valid():
            serializer.save()
            return Response({'success': True, 'data': serializer.data}, status=status.HTTP_200_OK)
        return Response({'success': False, 'error': serializer.errors}, status=status.HTTP_403_FORBIDDEN)


class TempD(APIView):
    def get(self, request, pk):
        try:
            tmp_deal = TempDeals.objects.get(pk=pk)
        except TempDeals.DoesNotExist as err:
            return Response({'success': False, 'error': str(err)}, status=status.HTTP_403_FORBIDDEN)
        serializer_temp_deal = TempDealsSerializer(tmp_deal)
        return Response(serializer_temp_deal.data, status=status.HTTP_200_OK)


class Order(APIView):
    def get(self, request, pk):
        try:
            order = OrderForDeal.objects.get(pk=pk)
        except OrderForDeal.DoesNotExist as err:
            return Response({'success': False, 'error': str(err)}, status=status.HTTP_403_FORBIDDEN)
        serializer = OrderForDealSerializer(order)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, pk):
        try:
            order = OrderForDeal.objects.get(pk=pk)
        except OrderForDeal.DoesNotExist as err:
            return Response({'success': False, 'error': str(err)}, status=status.HTTP_403_FORBIDDEN)
        serializer = OrderForDealCreateUpdateSerializer(order, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_403_FORBIDDEN)

    def delete(self, request, pk):
        try:
            user = User.objects.get(pk=request.user.id)
            order = OrderForDeal.objects.get(pk=pk)
        except User.DoesNotExist as err:
            return Response({'success': False, 'error': str(err)}, status=status.HTTP_403_FORBIDDEN)
        except OrderForDeal.DoesNotExist as err:
            return Response({'success': False, 'error': str(err)}, status=status.HTTP_403_FORBIDDEN)
        serializer = OrderForDealSerializer(order, partial=True, context={'user': user},
                                            data={'is_active': False, 'temp_deal': None, 'in_negotiations': False})
        if serializer.is_valid():
            serializer.save()
            return Response({'success': True, 'temp_deal': serializer.data}, status=status.HTTP_200_OK)
        return Response({'success': False, 'error': serializer.errors}, status=status.HTTP_403_FORBIDDEN)


class Next(APIView):
    def post(self, request, temp_deal_id):
        try:
            temp_deal = TempDeals.objects.get(pk=temp_deal_id)
        except TempDeals.DoesNotExist as err:
            return Response({'success': False, 'error': str(err)}, status=status.HTTP_403_FORBIDDEN)
        serializer = TempDealsSerializer(temp_deal, data={'is_active': False}, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response({'success': True, 'temp_deal': serializer.data}, status=status.HTTP_200_OK)
        return Response({'success': False, 'error': serializer.errors}, status=status.HTTP_403_FORBIDDEN)


class Conditions(APIView):
    def get(self, request, order_id):
        try:
            order = OrderForDeal.objects.get(pk=order_id)
        except OrderForDeal.DoesNotExist as err:
            return Response({'success': False, 'error': str(err)}, status=status.HTTP_403_FORBIDDEN)
        serializer = OrderForDealSerializer(order)
        return Response(serializer.data, status=status.HTTP_200_OK)


class StartDispute(APIView):
    def post(self, request, order_id):
        try:
            me = OrderForDeal.objects.get(pk=int(order_id))
        except OrderForDeal.DoesNotExist as err:
            return Response({'success': False, 'error': str(err)}, status=status.HTTP_403_FORBIDDEN)
        if not me.temp_deal:
            return Response({'success': False, 'error': 'Temp deal does not exist'}, status=status.HTTP_403_FORBIDDEN)
        competitor = OrderForDeal.objects.exclude(user=me.user).filter(temp_deal=me.temp_deal)
        if not competitor:
            return Response({'success': False, 'error': 'Temp deal does not exist'}, status=status.HTTP_403_FORBIDDEN)
        if me.deal:
            deal = Deals.objects.get(pk=me.deal.id)
            serializer = DealsSerializer(deal)
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            if competitor[0].deal:
                me.deal = competitor[0].deal
                me.save()
                me.deal.created = timezone.now()
                me.deal.save()
                deal = Deals.objects.get(pk=me.deal.id)
                serializer = DealsSerializer(deal)
                return Response(serializer.data, status=status.HTTP_200_OK)
            else:
                serializer = DealsSerializer(data=request.data, partial=True, context={'me': me})
                if serializer.is_valid():
                    serializer.save()
                    return Response(serializer.data, status=status.HTTP_200_OK)
                return Response(serializer.errors, status=status.HTTP_403_FORBIDDEN)


class UserDeals(APIView):
    def get(self, request):
        try:
            me = User.objects.get(pk=request.user.id)
        except User.DoesNotExist as err:
            return Response({'success': False, 'error': str(err)}, status=status.HTTP_403_FORBIDDEN)
        my_orders = OrderForDeal.objects.filter(user=me).filter(deal__isnull=False).order_by('-deal__created')
        serializer = OrderForDealSerializer(my_orders, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)