from django.urls import path, include
from rest_framework.routers import DefaultRouter
from weather_app.views import AddressListViewSet, AddressViewSet

router = DefaultRouter()
router.register("address-lists", AddressListViewSet, basename="address-list")
router.register("addresses", AddressViewSet, basename="address")

urlpatterns = [
    path("", include(router.urls))
]
