import pytest
from rest_framework import status
from rest_framework.test import APIClient
from django.urls import reverse
from apps.Users.models import DocumentType, PublicUsers

@pytest.mark.django_db
def test_create_public_user_endpoint():
    '''
    check correct creation of a public user
    '''
    client = APIClient()
    document_type = DocumentType.objects.create(DocumentType_description='Passport')

    # Los datos que enviaremos en la solicitud POST
    data = {
        'public_user_dt': document_type.id,
        'public_user_number': '6789',
        'public_user_name': 'Maria',
        'public_user_email': 'maria@example.com',
        'public_user_phone': '3116789'
    }
    
    # Llamar al endpoint
    response = client.post(reverse('publicusers-list'), data, format='json')

    # Verificar la respuesta
    assert response.status_code == status.HTTP_201_CREATED
    assert PublicUsers.objects.count() == 1
    assert PublicUsers.objects.get(public_user_number='6789').public_user_name == 'Maria'

@pytest.mark.django_db
def test_create_public_user_endpoint_with_duplicate_number():
    '''
    Check unique key document type and number
    '''
    client = APIClient()
    document_type = DocumentType.objects.create(DocumentType_description='Passport')
    
    # Crear un usuario
    PublicUsers.objects.create(
        public_user_dt=document_type,
        public_user_number='6789',
        public_user_name='Maria',
        public_user_email='maria@example.com',
        public_user_phone='3116789'
    )
    
    # Los datos que enviaremos en la solicitud POST
    data = {
        'public_user_dt': document_type.id,
        'public_user_number': '6789',  # Mismo número de usuario
        'public_user_name': 'Maria', # Mismo nombre
        'public_user_email': 'juan@example.com',
        'public_user_phone': '3111234'
    }
    
    # Llamar al endpoint
    response = client.post(reverse('publicusers-list'), data, format='json')
    # Verificar que la respuesta es un error debido a la duplicación
    assert response.status_code == status.HTTP_400_BAD_REQUEST
    assert 'Ya existe' in response.data['message']

@pytest.mark.django_db
def test_create_public_user_email():
    '''
    check valid email
    '''
    client = APIClient()
    document_type = DocumentType.objects.create(DocumentType_description='Passport')

    # Los datos que enviaremos en la solicitud POST
    data = {
        'public_user_dt': document_type.id,
        'public_user_number': '678912',
        'public_user_name': 'Maria',
        'public_user_email': 'maria',
        'public_user_phone': '3116789'
    }
    
    # Llamar al endpoint
    response = client.post(reverse('publicusers-list'), data, format='json')

    # Verificar la respuesta
    assert response.status_code == status.HTTP_400_BAD_REQUEST
    assert 'correo electrónico válida' in response.data['public_user_email'][0]