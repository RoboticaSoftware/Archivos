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
    document_type = DocumentType.objects.create(DocumentType_description='Passport')

    # The data to be sent in the POST request
    data = {
        'public_user_dt': document_type.id,
        'public_user_number': '6789',
        'public_user_name': 'Maria',
        'public_user_email': 'maria@example.com',
        'public_user_phone': '3116789'
    }
    
    # Call the endpoint
    response = client.post(reverse('publicusers-list'), data, format='json')

    # Verify the response
    assert response.status_code == status.HTTP_201_CREATED
    assert PublicUsers.objects.count() == 1
    assert PublicUsers.objects.get(public_user_number='6789').public_user_name == 'Maria'

@pytest.mark.django_db
def test_create_public_user_endpoint_with_duplicate_number():
    '''
    Check unique key for document type and number
    '''
    client = APIClient()
    document_type = DocumentType.objects.create(DocumentType_description='Passport')
    
    # Create a user
    PublicUsers.objects.create(
        public_user_dt=document_type,
        public_user_number='6789',
        public_user_name='Maria',
        public_user_email='maria@example.com',
        public_user_phone='3116789'
    )
    
    # The data to be sent in the POST request
    data = {
        'public_user_dt': document_type.id,
        'public_user_number': '6789',  # Same user number
        'public_user_name': 'Maria',   # Same name
        'public_user_email': 'juan@example.com',
        'public_user_phone': '3111234'
    }
    
    # Call the endpoint
    response = client.post(reverse('publicusers-list'), data, format='json')
    # Verify that the response is an error due to duplication
    assert response.status_code == status.HTTP_400_BAD_REQUEST
    assert 'Already exists' in response.data['message']

@pytest.mark.django_db
def test_create_public_user_email():
    '''
    Check valid email
    '''
    client = APIClient()
    document_type = DocumentType.objects.create(DocumentType_description='Passport')

    # The data to be sent in the POST request
    data = {
        'public_user_dt': document_type.id,
        'public_user_number': '67891222',
        'public_user_name': 'Maria',
        'public_user_email': 'maria',
        'public_user_phone': '3116789'
    }
    
    # Call the endpoint
    response = client.post(reverse('publicusers-list'), data, format='json')

    # Verify the response
    assert response.status_code == status.HTTP_400_BAD_REQUEST
    assert 'valid email address' in response.data['public_user_email'][0]

@pytest.mark.django_db
def test_read_public_user_endpoint():
    '''
    Check reading a public user from the endpoint
    '''
    client = APIClient()
    
    document_type = DocumentType.objects.create(DocumentType_description='Passport')
    # Create a user
    PublicUsers.objects.create(
        public_user_dt=document_type,
        public_user_number='67895654',
        public_user_name='Maria',
        public_user_email='maria@example.com',
        public_user_phone='3116789'
    )
    
    # call the endpoint
    response = client.get(reverse('publicusers-list'), format='json')
    
    assert response.status_code == status.HTTP_200_OK
    assert len(response.data) == 1
    assert response.data[0]['public_user_number'] == '67895654'
    assert response.data[0]['public_user_name'] == 'Maria'