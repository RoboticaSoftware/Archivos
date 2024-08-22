from django.contrib import admin
from django.urls import path, include

# import handle routes

from apps.Users.api.router import router_publicusers

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router_publicusers.urls))
]
