from django.contrib import admin
from django.urls import path, include

# import handle routes

from apps.Users.api.router import router_publicusers, router_documentType
from apps.Records.api.router import router_record_type, router_records

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router_publicusers.urls)),
    path('api/', include(router_documentType.urls)),
    path('api/', include(router_records.urls)),
    path('api/', include(router_record_type.urls)),
]
