from rest_framework.routers import DefaultRouter
from apps.Users.api.views import PublicUsersModelViewSet, DocumentTypeModelViewSet


# URL routing for PublicUsers
router_publicusers = DefaultRouter()
router_publicusers.register(prefix="publicusers", basename="publicusers", viewset=PublicUsersModelViewSet)

# URL routing for DocumentType
router_documentType = DefaultRouter()
router_documentType.register(prefix="documenttype", basename="documenttype", viewset=DocumentTypeModelViewSet)