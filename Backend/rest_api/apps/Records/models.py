from django.db import models
from ..Users.models import PublicUsers
from django.utils import timezone

class RecordType(models.Model):
    rt_code = models.CharField(max_length=10, unique=True)
    rt_description = models.CharField(max_length=50)

    def save(self, *args, **kwargs):
        if not self.rt_code:
            self.rt_code = f'DT-{self.pk}'
        super().save(*args, **kwargs)

    def __str__(self):
        return self.rt_code+'-'+self.rt_description


class Records(models.Model):
    r_create_at = models.DateTimeField(auto_now_add=True)
    r_rt = models.ForeignKey(RecordType, on_delete=models.CASCADE)
    r_number = models.CharField("Número de radicado", max_length=50, unique=True, blank=True, null=True)
    r_description = models.CharField("Descripción", max_length=50)
    r_receive_at_home = models.BooleanField(default=False)
    r_user = models.ForeignKey(PublicUsers, on_delete=models.CASCADE, blank=True, null= True )
    r_attached_file = models.CharField("Archivos Adjuntos", max_length=255, blank=True, null= True)

    def save(self, *args, **kwargs):
        '''
        Generate a record number
        '''
        if not self.r_number:
            # Obtén el último objeto de Radicado para el día actual
            last_Records = (
                Records.objects.filter(r_create_at__date=timezone.now())
                .order_by("-r_create_at")
                .first()
            )
            if last_Records:
                self.r_number = int(last_Records.r_number[-6:]) + 1
            else:
                self.r_number = 1

            # Ajusta el formato del número
            code_day = (
                str(timezone.now().year)
                + str(timezone.now().month).zfill(2)
                + str(timezone.now().day).zfill(2)
            )
            self.r_number = (
                self.r_rt.rt_code
                + code_day
                + str(self.r_number).zfill(6)
            )

        super().save(*args, **kwargs)

    def __str__(self):
        return self.r_number
