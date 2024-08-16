from .base import *

DEBUG = True

ALLOWED_HOSTS = [
    '127.0.0.1',
    'localhost',
]

CORS_ALLOWED_ORIGINS = [
    "http://localhost:5173",
]

# Configuración de la base de datos para desarrollo
DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql_psycopg2",
        "NAME": 'ArchivosDelEstado',
        'USER': 'ADE',
        'PASSWORD': 'D0cUm3nT2024*.',
        'HOST': 'localhost',
        'PORT': '5432'
    }
}

# Ruta de archivos estáticos para el entorno de desarrollo
STATIC_URL = 'static/'
STATIC_ROOT = "./static/"
