from rest_framework.serializers import ModelSerializer
from apps.PublicUsers.models import PublicUsers, DocumentType


class PublicUsersSerializer(ModelSerializer):
    """
    Permite enviar y recibir archivos en formato json
    """

    class Meta:
        model = PublicUsers
        # fields = '__all__' # tioma encuenta todas las columnas de mi modelo
        fields = ["id",
                  "public_user_td",
                  "public_user_numberTd",
                  "public_user_name", 
                  "public_user_email",
                  "public_user_phone"
                  ]

class DocumentTypeSerializer(ModelSerializer):
    """
    Permite enviar y recibir archivos en formato json
    """

    class Meta:
        model = DocumentType
        # fields = '__all__' # tioma encuenta todas las columnas de mi modelo
        fields = ["id",
                  "DocumentType_code", 
                  "DocumentType_description"
                  ]