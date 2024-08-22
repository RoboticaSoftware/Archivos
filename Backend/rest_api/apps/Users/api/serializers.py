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
            "public_user_dt",
            "public_user_number",
            "public_user_name",
            "public_user_email",
            "public_user_phone"
        ]

    
    

class DocumentTypeSerializer(ModelSerializer):
    """
    Serializer for the DocumentType model to convert data to and from JSON format.
    """
    class Meta:
        model = DocumentType
        fields = [
            "id",
            "DocumentType_code", 
            "DocumentType_description"
        ]
