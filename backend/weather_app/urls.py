from django.urls import path, include
from .views import AddressViewSet, weather_api_zipcode
from rest_framework.routers import DefaultRouter

urlpatterns = [
    path('weather/<str:zipcode>', weather_api_zipcode, name="weather_api_zipcode")
]

router = DefaultRouter()
router.register(r'', AddressViewSet, basename='address')
urlpatterns = router.urls + urlpatterns



