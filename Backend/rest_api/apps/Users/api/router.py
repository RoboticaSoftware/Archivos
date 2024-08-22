from rest_framework.routers import DefaultRouter
from apps.Users.api.views import PublicUsersModelViewSet


# URL routing for DocumentType
router_publicusers = DefaultRouter()
router_publicusers.register(prefix="publicusers", basename="publicusers", viewset=PublicUsersModelViewSet)