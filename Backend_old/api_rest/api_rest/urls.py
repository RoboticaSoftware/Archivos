from django.contrib import admin
from django.urls import path, include

from drf_yasg.views import get_schema_view
from drf_yasg import openapi

# importamos las rutas 
from apps.Filings.api.router import router_filings, router_filingstype, router_filingsaddress, router_filingsusers
from apps.PublicUsers.api.router import router_documenttype, router_publicusers

# importamos la vista

from apps.Filings.api.views import MyView

# para la documentación automatica

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
    path("docs/",schema_view.with_ui("swagger", cache_timeout=0),name="schema-swagger-ui",), # url para la documentación automatica
    path("redocs/", schema_view.with_ui("redoc", cache_timeout=0), name="schema-redoc"),# url para la documentación automatica
    path("api/", include(router_publicusers.urls)),
    path("api/", include(router_documenttype.urls)), 
    path("api/", include(router_filings.urls)),  
    path("api/", include(router_filingstype.urls)), 
    path("api/", include(router_filingsaddress.urls)), 
    path("api/", include(router_filingsusers.urls)), 
    path('my-view/<str:date>/', MyView.as_view(), name='my-view'),
]


