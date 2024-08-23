import pytest
from rest_framework import status
from rest_framework.test import APIClient
from django.urls import reverse
from apps.Users.models import DocumentType

@pytest.mark.django_db
def test_create_document_type_endpoint():
    '''
    check correct creation of a document type
    '''
    client = APIClient()
    
    data = {
        "DocumentType_code": "PRU",
        "DocumentType_description": "Documento Test"
    }
    
    response = client.post(reverse('documenttype-list'), data, format='json')

    assert response.status_code == status.HTTP_201_CREATED
    assert DocumentType.objects.count() == 1
    assert str(DocumentType.objects.get(DocumentType_description='Documento Test')) == 'PRU-Documento Test'

@pytest.mark.django_db
def test_read_document_type_endpoint():
    '''
    Check reading a document type from the endpoint
    '''
    client = APIClient()
    
    DocumentType.objects.create(DocumentType_code="PRU", DocumentType_description="Documento Test")
    
    response = client.get(reverse('documenttype-list'), format='json')
    
    assert response.status_code == status.HTTP_200_OK
    assert len(response.data) == 1
    assert response.data[0]['DocumentType_code'] == 'PRU'
    assert response.data[0]['DocumentType_description'] == 'Documento Test'

@pytest.mark.django_db
def test_update_document_type_endpoint():
    '''
    Check updating a document type
    '''
    client = APIClient()

    document_type = DocumentType.objects.create(DocumentType_code="PRU", DocumentType_description="Documento Test")

    updated_data = {
        "DocumentType_code": "UPD",
        "DocumentType_description": "Documento Actualizado"
    }
    
    response = client.put(reverse('documenttype-detail', args=[document_type.id]), updated_data, format='json')
    
    assert response.status_code == status.HTTP_200_OK
    document_type.refresh_from_db()
    assert document_type.DocumentType_code == 'UPD'
    assert document_type.DocumentType_description == 'Documento Actualizado'

@pytest.mark.django_db
def test_delete_document_type_endpoint():
    '''
    Check deleting a document type
    '''
    client = APIClient()
    
    # create an instance of document type
    document_type = DocumentType.objects.create(DocumentType_code="PRU", DocumentType_description="Documento Test")
    # Call endpoint
    response = client.delete(reverse('documenttype-detail', args=[document_type.id]), format='json')
    
    assert response.status_code == status.HTTP_204_NO_CONTENT
    assert DocumentType.objects.count() == 0