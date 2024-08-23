from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from django.db import IntegrityError
from apps.Records.models import RecordType, Records
from apps.Records.api.serializers import RecordSerializer, RecordTypeSerializer


class RecordTypeModelViewSet(ModelViewSet):
    """
    """
    serializer_class = RecordTypeSerializer
    queryset = RecordType.objects.all()

class RecordModelViewSet(ModelViewSet):
    """
    """
    serializer_class = RecordSerializer
    queryset = Records.objects.all()


    