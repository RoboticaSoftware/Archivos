from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from apps.PublicUsers.models import PublicUsers, DocumentType
from apps.PublicUsers.api.serializers import PublicUsersSerializer, DocumentTypeSerializer
from django.db import IntegrityError


class PublicUsersModelViewSet(ModelViewSet):
    serializer_class = PublicUsersSerializer
    queryset = PublicUsers.objects.all()
    
    def retrieve(self, request, pk=None):
        elementos = pk[1:-1].split(',')
        pks = list(map(int, elementos))
        print(pks)
        serializer = PublicUsersSerializer(get_object_or_404(PublicUsers,
                    public_user_numberTd=pks[0],
                    public_user_td=pks[1]))
        return Response(serializer.data)

  
    def create(self, request):
        serializer = PublicUsersSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        
        try:
            # Verifica si ya existe un usuario con la misma clave primaria
            existing_user = PublicUsers.objects.filter(
                    public_user_numberTd=request.data['public_user_numberTd'],
                    public_user_td=request.data['public_user_td']
                )

            if existing_user.exists():
                raise IntegrityError('Clave duplicada')

            serializer.save()
            return Response(status=status.HTTP_200_OK, data=serializer.data)
        except IntegrityError as e:
            data = {
                'message': 'Clave duplicadas'
            }
            return Response(status=status.HTTP_400_BAD_REQUEST, data=data)

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
            return Response(status=status.HTTP_200_OK, data=serializer.data)
        except IntegrityError as e:
            data = {
                'message': 'Clave duplicadas'
            }
            return Response(status=status.HTTP_400_BAD_REQUEST, data=data)


