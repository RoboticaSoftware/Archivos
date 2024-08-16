from .base import *

DEBUG = True

ALLOWED_HOSTS = ['127.0.0.1',
                 'http://127.0.0.1:8000',
                 'localhost',
                 'http://127.0.0.1:5173']


#CORS_ALLOW_ALL_ORIGINS = True

CORS_ALLOWED_ORIGINS = [
    "http://localhost:5173",
]

CORS_ORIGIN_WHITELIST = [
    "http://localhost:5173",
]


# conexión a la base de dato de desarrollo
DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql_psycopg2",
        "NAME": 'ICBF',
        'USER': 'sa',
        'PASSWORD': 'D0cUm3nT2024*.',
        'HOST': 'localhost',
        'PORT': '5432'
    }
}
'''

# conexión a la base de datos de desarrollo
DATABASES = {
    "default": {
        "ENGINE": "sql_server.pyodbc",
        "NAME": 'ICBF',
        'USER': 'sa',
        'PASSWORD': 'D0cUm3nT2024*.',
        'HOST': 'localhost',
        'PORT': '1433',  # El puerto no es necesario para SQL Server
        'OPTIONS': {
            'driver': 'SQL Server Native Client 10.0',  # Ajusta el controlador según tu instalación
        },
    }
}
'''


# ruta de archivos estaticos ambiente de desarrollo
STATIC_URL = 'static/'
STATIC_ROOT = "./static/"