from django.urls import path, include
from .views import AddressViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'', AddressViewSet, basename='address')
urlpatterns = router.urls
