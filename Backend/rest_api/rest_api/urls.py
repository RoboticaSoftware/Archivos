from django.contrib import admin
from django.urls import path, include
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

# import handle routes

from apps.Users.api.router import router_publicusers, router_documentType
from apps.Records.api.router import router_record_type, router_records


# for documentation

schema_view = get_schema_view(
    openapi.Info(
        title="Snippets API",
        default_version="v1",
        description="Test description",
        terms_of_service="https://www.google.com/policies/terms/",
        contact=openapi.Contact(email="contact@snippets.local"),
        license=openapi.License(name="BSD License"),
    ),
    public=True,
)


urlpatterns = [
    path('admin/', admin.site.urls),
    path("docs/",schema_view.with_ui("swagger", cache_timeout=0),name="schema-swagger-ui",), # url automatic documentation
    path("redocs/", schema_view.with_ui("redoc", cache_timeout=0), name="schema-redoc"),# url automatic documentation
    path('api/', include(router_publicusers.urls)),
    path('api/', include(router_documentType.urls)),
    path('api/', include(router_records.urls)),
    path('api/', include(router_record_type.urls)),
]
