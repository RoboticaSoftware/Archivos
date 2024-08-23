import pytest
from rest_framework import status
from rest_framework.test import APIClient
from django.urls import reverse
from apps.Users.models import DocumentType, PublicUsers

@pytest.mark.django_db
def test_create_public_user_endpoint():
    '''
    Check correct creation of a public user
    '''
    client = APIClient()
    document_type = DocumentType.objects.create(dt_description='Passport')

    # The data to be sent in the POST request
    data = {
        'pu_dt': document_type.id,
        'pu_number': '6789',
        'pu_name': 'Maria',
        'pu_email': 'maria@example.com',
        'pu_phone': '3116789'
    }
    
    # Call the endpoint
    response = client.post(reverse('publicusers-list'), data, format='json')

    # Verify the response
    assert response.status_code == status.HTTP_201_CREATED
    assert PublicUsers.objects.count() == 1
    assert PublicUsers.objects.get(pu_number='6789').pu_name == 'Maria'

@pytest.mark.django_db
def test_create_public_user_endpoint_with_duplicate_number():
    '''
    Check unique key for document type and number
    '''
    client = APIClient()
    document_type = DocumentType.objects.create(dt_description='Passport')
    
    # Create a user
    PublicUsers.objects.create(
        pu_dt=document_type,
        pu_number='6789',
        pu_name='Maria',
        pu_email='maria@example.com',
        pu_phone='3116789'
    )
    
    # The data to be sent in the POST request
    data = {
        'pu_dt': document_type.id,
        'pu_number': '6789',  # Same user number
        'pu_name': 'Maria',   # Same name
        'pu_email': 'juan@example.com',
        'pu_phone': '3111234'
    }
    
    # Call the endpoint
    response = client.post(reverse('publicusers-list'), data, format='json')
    # Verify that the response is an error due to duplication
    assert response.status_code == status.HTTP_400_BAD_REQUEST
    assert 'Ya existe' in response.data['message']

@pytest.mark.django_db
def test_create_public_user_email():
    '''
    Check valid email
    '''
    client = APIClient()
    document_type = DocumentType.objects.create(dt_description='Passport')

    # The data to be sent in the POST request
    data = {
        'pu_dt': document_type.id,
        'pu_number': '67891222',
        'pu_name': 'Maria',
        'pu_email': 'maria',
        'pu_phone': '3116789'
    }
    
    # Call the endpoint
    response = client.post(reverse('publicusers-list'), data, format='json')

    # Verify the response
    assert response.status_code == status.HTTP_400_BAD_REQUEST
    assert 'correo electrónico válida' in response.data['pu_email'][0]

@pytest.mark.django_db
def test_read_public_user_endpoint():
    '''
    Check reading a public user from the endpoint
    '''
    client = APIClient()
    
    document_type = DocumentType.objects.create(dt_description='Passport')
    # Create a user
    PublicUsers.objects.create(
        pu_dt=document_type,
        pu_number='67895654',
        pu_name='Maria',
        pu_email='maria@example.com',
        pu_phone='3116789'
    )
    
    # call the endpoint
    response = client.get(reverse('publicusers-list'), format='json')
    
    assert response.status_code == status.HTTP_200_OK
    assert len(response.data) == 1
    assert response.data[0]['pu_number'] == '67895654'
    assert response.data[0]['pu_name'] == 'Maria'

@pytest.mark.django_db
def test_update_public_user_endpoint():
    '''
    Check updating a public user
    '''
    client = APIClient()

    document_type = DocumentType.objects.create(dt_description='Passport')
    # Create a user
    public_user =  PublicUsers.objects.create(
        pu_dt=document_type,
        pu_number='67',
        pu_name='Maria',
        pu_email='maria12@example.com',
        pu_phone='3116789'
    )

    updated_data = {
        'pu_dt': document_type.id,
        'pu_number': '679',
        'pu_name': 'Maria Editado',
        'pu_email': 'maria12@example.com',
        'pu_phone': '31167890'
    }
    response = client.put(reverse('publicusers-detail', args=[public_user.id]), updated_data, format='json')
    
    assert response.status_code == status.HTTP_200_OK
    public_user.refresh_from_db()
    assert public_user.pu_number == '679'
    assert public_user.pu_name == 'Maria Editado'
    assert public_user.pu_email =='maria12@example.com'
    assert public_user.pu_phone == '31167890'

@pytest.mark.django_db
def test_delete_public_user_endpoint():
    '''
    Check deleting a public user
    '''
    client = APIClient()
    
    document_type = DocumentType.objects.create(dt_description='Passport')
    # Create a user
    public_user =  PublicUsers.objects.create(
        pu_dt=document_type,
        pu_number='67',
        pu_name='Maria',
        pu_email='maria12@example.com',
        pu_phone='3116789'
    )



    # Call endpoint
    response = client.delete(reverse('publicusers-detail', args=[public_user.id]), format='json')
    
    assert response.status_code == status.HTTP_204_NO_CONTENT
    assert PublicUsers.objects.count() == 0