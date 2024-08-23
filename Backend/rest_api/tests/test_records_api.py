import pytest
from rest_framework import status
from rest_framework.test import APIClient
from django.urls import reverse
from apps.Records.models import Records, RecordType
from apps.Users.models import PublicUsers, DocumentType

@pytest.mark.django_db
def test_create_Record_endpoint():
    '''
    check correct creation of a record
    '''
    client = APIClient()
    # create an instance of public user

    document_type = DocumentType(
        dt_description = "Pruebas"
        )

    user = PublicUsers(
        pu_dt = document_type, 
        pu_number = '1234',  
        pu_name = 'test',
        pu_email = 'test@gmail.com',
        pu_phone = '311',
        )

    # Create Record type
    record_type = RecordType(
        rt_code = 'DT', 
        rt_description = "Test",
        )

    data = {
        "r_description":"Pruebas",
        "r_user" : user.id,
        "r_rt" : record_type.id 
    }
    
    # Call endpoint
    response = client.post(reverse('records-list'), data, format='json')

    assert response.status_code == status.HTTP_201_CREATED
    assert Records.objects.count() == 1
    assert Records.objects.get(dt_description='Documento Test').r_description == 'Pruebas'

