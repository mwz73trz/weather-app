from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from weather_app.serializers import AddressListSerializer, AddressSerializer
from weather_app.models import AddressList, Address

class AddressListViewSet(ModelViewSet):
    queryset = AddressList.objects.all()
    serializer_class = AddressListSerializer

class AddressViewSet(ModelViewSet):
    queryset = Address.objects.all()
    serializer_class = AddressSerializer
