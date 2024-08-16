from datetime import datetime
from django.db.models import F
from rest_framework import status
from rest_framework.viewsets import ModelViewSet
from rest_framework.views import APIView
from rest_framework.response import Response
from apps.Filings.models import Filings, FilingsType, FilingsAddress, FilingsUsers
from apps.Filings.api.serializers import FilingsSerializer, FilingsTypeSerializer,FilingsAddressSerializer, FilingsUsersSerializer

class FilingsModelViewSet(ModelViewSet):
    """
    """
    serializer_class = FilingsSerializer
    queryset = Filings.objects.all()

class FilingsTypeModelViewSet(ModelViewSet):
    """
    """
    serializer_class = FilingsTypeSerializer
    queryset = FilingsType.objects.all()

class FilingsAddressModelViewSet(ModelViewSet):
    """
    """
    serializer_class = FilingsAddressSerializer
    queryset = FilingsAddress.objects.all()

class FilingsUsersModelViewSet(ModelViewSet):
    """
    """
    serializer_class = FilingsUsersSerializer
    queryset = FilingsUsers.objects.all()

class MyView(APIView):
    def get(self, request, date = None,format=None):
        date_string = request.GET.get('date')
        print('-----', datetime.strptime(date, '%Y-%m-%d'))
        if date_string:
            date = datetime.strptime(date_string, '%Y-%m-%d')
            queryset = Filings.objects.filter(Filings_receive_at_home=True, Filings_created_at__date=date).values('Filingsaddress_filing','Filings_number', 'Filings_description', 'Filings_created_at', 'filingsaddress__FilingsAddress_address')
        else:
            queryset = Filings.objects.filter(Filings_receive_at_home=True).values(
                'id',
                Fecha = F('Filings_created_at'), 
                Tipo = F("Filings_td"),
                Radicado = F('Filings_number'), 
                Descripción = F('Filings_description'), 
                Dirección=F('filingsaddress__FilingsAddress_address')
                )
        return Response(queryset.distinct())