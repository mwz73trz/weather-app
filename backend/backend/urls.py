from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('login/', include('jwt_auth.urls')),
    path('api/', include('weather_app.urls')),
]
