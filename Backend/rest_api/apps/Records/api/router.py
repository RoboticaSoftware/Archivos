from rest_framework.routers import DefaultRouter
from apps.Records.api.views import RecordModelViewSet, RecordTypeModelViewSet


# URL routing for records
router_records = DefaultRouter()
router_records.register(prefix="records", basename="records", viewset=RecordModelViewSet)

# URL routing for records
router_record_type = DefaultRouter()
router_record_type.register(prefix="recordtype", basename="recordtype", viewset=RecordModelViewSet)


