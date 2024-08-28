from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from apps.Users.models import PublicUsers, DocumentType
from django.core.validators import validate_email
from django.core.exceptions import ValidationError

class PublicUsersSerializer(ModelSerializer):
    '''
    Serializer for the PublicUsers model to convert data to and from JSON format.
    '''
    class Meta:
        model = PublicUsers
        fields = [
            "id",
            "pu_dt",
            "pu_number",
            "pu_name",
            "pu_email",
            "pu_phone", 
            "pu_address"
        ]

    
    

class DocumentTypeSerializer(ModelSerializer):
    """
    Serializer for the DocumentType model to convert data to and from JSON format.
    """
    class Meta:
        model = DocumentType
        fields = [
            "id",
            "dt_code", 
            "dt_description"
        ]
