from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from rest_framework.exceptions import ValidationError
from django.db import IntegrityError
from apps.Users.models import PublicUsers, DocumentType
from apps.Users.api.serializers import PublicUsersSerializer, DocumentTypeSerializer

class PublicUsersModelViewSet(ModelViewSet):
    """
    A viewset for handling CRUD operations for the PublicUsers model.
    """
    serializer_class = PublicUsersSerializer
    queryset = PublicUsers.objects.all()

    def retrieve(self, request, pk=None):
        """
        Retrieve a PublicUsers instance by its composite key.
        """
        elements = pk[1:-1].split(',')
        instance = get_object_or_404(PublicUsers,
                                     pu_dt=int(elements[0]),
                                     pu_number=elements[1])
        serializer = PublicUsersSerializer(instance)
        return Response(serializer.data)
    
    '''def create(self, request):
        serializer = PublicUsersSerializer(data=request.data)
        try:
            # Verifica si ya existe un usuario con la misma clave primaria
            existing_user = PublicUsers.objects.filter(
                    pu_number=request.data['pu_number'],
                    pu_dt=request.data['pu_dt']
                )

            if existing_user.exists():
                raise IntegrityError('Ya existe un usuario con ese tipo y número de documento')
        except IntegrityError as e:
            data = {
                'message': 'Ya existe un usuario con este tipo y número de documento'
            }
            return Response(status=status.HTTP_400_BAD_REQUEST, data=data)
        if serializer.is_valid(raise_exception=True):
                serializer.save()
                return Response(status=status.HTTP_201_CREATED, data=serializer.data)   
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST, data=serializer.errors)'''


class DocumentTypeModelViewSet(ModelViewSet):
    """
    """
    serializer_class = DocumentTypeSerializer
    queryset = DocumentType.objects.all()

    def create(self, request):
        '''
        '''
        serializer = DocumentTypeSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        try:
            serializer.save()
            return Response(status=status.HTTP_201_CREATED, data=serializer.data)
        except IntegrityError as e:
            data = {
                'message': 'Tipo de documento ya existe'
            }
            return Response(status=status.HTTP_400_BAD_REQUEST, data=data)

        
