# my_app/tests/test_models.py
import pytest
from apps.Users.models import DocumentType, PublicUsers

@pytest.mark.django_db # indicates that the test needs access to the database
def test_document_type_save_without_code():
    '''
    create an instance of documentType without code 
    '''
    document_type = DocumentType(DocumentType_description="Test Description")
    document_type.save()

    assert document_type.DocumentType_code.startswith('DT-')
    assert len(document_type.DocumentType_code) > 3

@pytest.mark.django_db
def test_document_type_string_representation():
    '''
    Create and check an instance of document type 
    '''
    document_type = DocumentType(DocumentType_code="DT-001", DocumentType_description="Test Description")
    document_type.save()

    assert str(document_type) == "DT-001-Test Description"

@pytest.mark.django_db
def test_public_user_string_representation():
    '''
    check correct representation
    '''
    document_type = DocumentType(DocumentType_code="DT-001", DocumentType_description="Test Description")
    public_user = PublicUsers(
        public_user_dt = document_type,
        public_user_number = '1234',
        public_user_name = 'Pepito',
        public_user_email = 'Alberto@gmail.com',
        public_user_phone = 311469
    )

    assert str(public_user)=='1234 - Pepito'

@pytest.mark.django_db
def test_create_public_user():
    '''
    Check correct creation of public user
    '''
    document_type = DocumentType.objects.create( DocumentType_description='Passport')
    public_user = PublicUsers.objects.create(
        public_user_dt=document_type,
        public_user_number='5678',
        public_user_name='Juanito',
        public_user_email='juanito@example.com',
        public_user_phone='3114695678'
    )
    
    assert PublicUsers.objects.count() == 1
    assert PublicUsers.objects.get(public_user_number='5678') == public_user
    
@pytest.mark.django_db
def test_unique_constraint_on_public_user():
    '''
    Check unique key between document type and number
    '''
    document_type = DocumentType.objects.create(DocumentType_description='Passport')
    
    PublicUsers.objects.create(
        public_user_dt=document_type,
        public_user_number='1234',
        public_user_name='Pepito',
        public_user_email='pepito@example.com'
    )
    
    with pytest.raises(Exception):  
        PublicUsers.objects.create(
            public_user_dt=document_type,
            public_user_number='1234',  
            public_user_name='OtroNombre',
            public_user_email='otro@example.com'
        )
