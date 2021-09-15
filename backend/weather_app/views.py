from django.http import JsonResponse
import requests
from rest_framework import viewsets
from .models import Address
from .serializers import AddressSerializer

open_weather_api_key = '717ba755a35b3cbdd2cfb72fa1dbfcd3'

class AddressViewSet(viewsets.ModelViewSet):
    queryset = Address.objects.all()
    serializer_class = AddressSerializer

def weather_api_zipcode(request, zipcode):
    response = requests.get(f'https://api.openweathermap.org/data/2.5/weather?zip={zipcode},us&appid={open_weather_api_key}&units=imperial').json()
    return JsonResponse(response, safe=False)