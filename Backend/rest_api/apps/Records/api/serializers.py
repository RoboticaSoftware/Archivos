from rest_framework.serializers import ModelSerializer
from apps.Records.models import RecordType, Records

class RecordTypeSerializer(ModelSerializer):
    '''
    Serializer for the PublicUsers model to convert data to and from JSON format.
    '''
    class Meta:
        model = RecordType
        fields = [
            "id",
            "rt_code",
            "rt_description"
        ]

class RecordSerializer(ModelSerializer):
    '''
    Serializer for the PublicUsers model to convert data to and from JSON format.
    '''
    class Meta:
        model = Records
        fields = [
            "id",
            "r_rt",
            "r_number",
            "r_description",
            "r_receive_at_home",
            "r_user",
            "r_attached_file",
        ]
