# Usar una imagen base de Python
FROM python:3.11-slim

# Establece el directorio de trabajo dentro del contenedor 
WORKDIR /rest_api

# Copiar los archivos de requisitos
COPY requirements.txt /rest_api/

# Instalar las dependencias de Python
RUN pip install --no-cache-dir -r requirements.txt

# Copiar el resto del código de la aplicación
COPY . /rest_api/

# Exponer el puerto que el servidor Django usará
EXPOSE 8000

# Corre el servidor Django
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]