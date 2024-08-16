import pytest
from apps.Users.models import PublicUsers

def test_user_public_creation():
    '''
    Creación de un usuario publico para validar su correcta creación
    '''
    user = PublicUsers.objects.create_user(
        public_user_dt=1,
        public_user_number = "1234",
        public_user_name = "Pruebas",
        public_user_email =  "papito@gmail.com",
        public_user_phone =  "3111234",
    )

    assert user.id > 1