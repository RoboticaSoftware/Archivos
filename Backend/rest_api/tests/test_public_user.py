# my_app/tests/test_models.py
import pytest
from apps.Users.models import DocumentType, PublicUsers

@pytest.mark.django_db # indica que la prueba necesita acceso a la base de datos
def test_document_type_save_without_code():
    # Crear una instancia de DocumentType sin DocumentType_code en una base de datos temporal
    document_type = DocumentType(DocumentType_description="Test Description")
    document_type.save()

    # Verificar que el DocumentType_code se ha generado correctamente
    assert document_type.DocumentType_code.startswith('DT-')
    assert len(document_type.DocumentType_code) > 3

@pytest.mark.django_db
def test_document_type_string_representation():
    # Crear una instancia de DocumentType
    document_type = DocumentType(DocumentType_code="DT-001", DocumentType_description="Test Description")
    document_type.save()

    # Verificar la representación de cadena
    assert str(document_type) == "DT-001-Test Description"

@pytest.mark.django_db
def test_public_user_string_representation():
    '''
    Verifica que la representación del objeto sea correcta
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
    Verifica la correcta creación del objeto
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
    Verifica la clave unica entre document type y number
    '''
    document_type = DocumentType.objects.create(DocumentType_description='Passport')
    
    PublicUsers.objects.create(
        public_user_dt=document_type,
        public_user_number='1234',
        public_user_name='Pepito',
        public_user_email='pepito@example.com'
    )
    
    with pytest.raises(Exception):  # lo que espera que se salte en la excepción 
        PublicUsers.objects.create(
            public_user_dt=document_type,
            public_user_number='1234',  # Mismo número de documento
            public_user_name='OtroNombre',
            public_user_email='otro@example.com'
        )
