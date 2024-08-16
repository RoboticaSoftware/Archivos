from rest_framework.routers import DefaultRouter
from apps.Filings.api.views import FilingsModelViewSet, FilingsTypeModelViewSet, FilingsAddressModelViewSet, FilingsUsersModelViewSet


# registro de rutas para Filings
router_filings = DefaultRouter()
router_filings.register(prefix="filings", basename="filings", viewset=FilingsModelViewSet)

# registro de rutas para FilingsType
router_filingstype = DefaultRouter()
router_filingstype.register(prefix="filingstype", basename="filingstype", viewset=FilingsTypeModelViewSet)

# registro de rutas para FilingsAddress
router_filingsaddress = DefaultRouter()
router_filingsaddress.register(prefix="filingsaddress", basename="filingsaddress", viewset=FilingsAddressModelViewSet)

# registro de rutas para FilingsUsers
router_filingsusers = DefaultRouter()
router_filingsusers.register(prefix="filingsusers", basename="filingsusers", viewset=FilingsUsersModelViewSet)