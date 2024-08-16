from rest_framework.routers import DefaultRouter
from apps.PublicUsers.api.views import DocumentTypeModelViewSet, PublicUsersModelViewSet


# registro de rutas para DocumentType
router_documenttype = DefaultRouter()
router_documenttype.register(prefix="documenttype", basename="documenttype", viewset=DocumentTypeModelViewSet)

# registro de rutas para DocumentType
router_publicusers = DefaultRouter()
router_publicusers.register(prefix="publicusers", basename="publicusers", viewset=PublicUsersModelViewSet)