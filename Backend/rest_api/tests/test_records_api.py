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

    document_type = DocumentType.objects.create(dt_description='Passport')

    user = PublicUsers.objects.create(
        pu_dt = document_type, 
        pu_number = '1234',  
        pu_name = 'test',
        pu_email = 'test@gmail.com',
        pu_phone = '311',
        )

    # Create Record type
    record_type = RecordType.objects.create(
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
    assert Records.objects.get(r_description='Pruebas').r_description == 'Pruebas'

@pytest.mark.django_db
def test_read_records_endpoint():
    '''
    Check reading a record from the endpoint
    '''
    client = APIClient()
    
    document_type = DocumentType.objects.create(dt_description='Passport')

    user = PublicUsers.objects.create(
        pu_dt = document_type, 
        pu_number = '1234',  
        pu_name = 'test',
        pu_email = 'test@gmail.com',
        pu_phone = '311',
        )

    # Create Record type
    record_type = RecordType.objects.create(
        rt_code = 'DT', 
        rt_description = "Test",
        )

    
    Records.objects.create(r_description="Pruebas", r_user= user, r_rt = record_type)
    # Call endpoint
        
    response = client.get(reverse('records-list'), format='json')
    
    assert response.status_code == status.HTTP_200_OK
    assert len(response.data) == 1
    assert response.data[0]['r_description'] == 'Pruebas'

@pytest.mark.django_db
def test_update_record_endpoint():
    '''
    Check updating a record
    '''
    client = APIClient()

    document_type = DocumentType.objects.create(dt_description='Passport')

    user = PublicUsers.objects.create(
        pu_dt = document_type, 
        pu_number = '1234',  
        pu_name = 'test',
        pu_email = 'test@gmail.com',
        pu_phone = '311',
        )

    # Create Record type
    record_type = RecordType.objects.create(
        rt_code = 'DT', 
        rt_description = "Test",
        )

    
    record = Records.objects.create(r_description="Pruebas", r_user= user, r_rt = record_type)

    # define the data o update
    updated_data = {
        "r_description":"Pruebas Editado",
        "r_user" : user.id,
        "r_rt" : record_type.id 
    }
    
    response = client.put(reverse('records-detail', args=[record.id]), updated_data, format='json')
    
    assert response.status_code == status.HTTP_200_OK
    record.refresh_from_db()
    assert record.r_description == 'Pruebas Editado'


@pytest.mark.django_db
def test_delete_record_endpoint():
    '''
    Check deleting a record
    '''
    client = APIClient()
    
    document_type = DocumentType.objects.create(dt_description='Passport')

    user = PublicUsers.objects.create(
        pu_dt = document_type, 
        pu_number = '1234',  
        pu_name = 'test',
        pu_email = 'test@gmail.com',
        pu_phone = '311',
        )

    # Create Record type
    record_type = RecordType.objects.create(
        rt_code = 'DT', 
        rt_description = "Test",
        )

    
    record = Records.objects.create(r_description="Pruebas", r_user= user, r_rt = record_type)

    # Call endpoint
    response = client.delete(reverse('records-detail', args=[record.id]), format='json')
    
    assert response.status_code == status.HTTP_204_NO_CONTENT
    assert Records.objects.count() == 0

