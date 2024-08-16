from rest_framework.serializers import ModelSerializer
from apps.Filings.models import Filings, FilingsType, FilingsAddress, FilingsUsers


class FilingsSerializer(ModelSerializer):
    """
    Permite enviar y recibir archivos en formato json
    """

    class Meta:
        model = Filings
        # fields = '__all__' # tioma encuenta todas las columnas de mi modelo
        fields = [
            "id",
            "Filings_number",
            "Filings_description",
            "Filings_receive_at_home",
            "Filings_td",
            "Filings_attached_file",
        ]


class FilingsTypeSerializer(ModelSerializer):
    """
    Permite enviar y recibir archivos en formato json
    """

    class Meta:
        model = FilingsType
        # fields = '__all__' # tioma encuenta todas las columnas de mi modelo
        fields = ["id", "FilingsType_description"]


class FilingsAddressSerializer(ModelSerializer):
    """
    Permite enviar y recibir archivos en formato json
    """

    class Meta:
        model = FilingsAddress
        # fields = '__all__' # tioma encuenta todas las columnas de mi modelo
        fields = ["id", "FilingsAddress_address", "FilingsAddress_filing"]


class FilingsUsersSerializer(ModelSerializer):
    """
    Permite enviar y recibir archivos en formato json
    """

    class Meta:
        model = FilingsUsers
        # fields = '__all__' # tioma encuenta todas las columnas de mi modelo
        fields = ["id", "FilingsUsers_filing", "FilingsUsers_user"]
