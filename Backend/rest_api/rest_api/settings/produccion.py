from .base import *

DEBUG = True

ALLOWED_HOSTS = [
    "127.0.0.1",
    "http://127.0.0.1:8000",
    "localhost",
    "http://127.0.0.1:5173",
]


# conexión a la base de datos de desarrollo

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql_psycopg2",
        "NAME": "ArchivosDelEstado",
        "USER": "postgres",
        "PASSWORD": "albapp",
        "HOST": "localhost",
        "PORT": "5432",
    }
}

# CORS_ALLOW_ALL_ORIGINS = True
CORS_ALLOWED_ORIGINS = [
    "http://localhost:5173",
]

CORS_ORIGIN_WHITELIST = [
    "http://localhost:5173",
]

STATIC_URL = "static/"
STATIC_ROOT = "./static/"