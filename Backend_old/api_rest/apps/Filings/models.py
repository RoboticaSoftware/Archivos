from django.db import models
from ..PublicUsers.models import PublicUsers
from django.utils import timezone


class FilingsType(models.Model):
    FilingsType_code = models.CharField(max_length=10, unique=True, default="-")
    FilingsType_description = models.CharField(max_length=50)

    def save(self, *args, **kwargs):
        if not self.FilingsType_code:
            self.FilingsType_code = f"FT-{self.pk}"
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.FilingsType_code} - {self.FilingsType_description}"


class Filings(models.Model):
    Filings_td = models.ForeignKey(FilingsType, on_delete=models.CASCADE)
    Filings_number = models.CharField(
        "Número de radicado", max_length=50, unique=True, blank=True, null=True
    )
    Filings_description = models.CharField("Descripción", max_length=50)
    Filings_receive_at_home = models.BooleanField(default=False)
    Filings_created_at = models.DateTimeField(auto_now_add=True)
    Filings_attached_file = models.FileField(
        upload_to="Filings/attached_files/", blank=True, null=True
    )

    def save(self, *args, **kwargs):
        # Si el objeto no tiene un número de radicado diario asignado, asigna uno automáticamente
        if not self.Filings_number:
            # Obtén el último objeto de Radicado para el día actual
            last_filings = (
                Filings.objects.filter(Filings_created_at__date=timezone.now())
                .order_by("-Filings_created_at")
                .first()
            )
            if last_filings:
                self.Filings_number = int(last_filings.Filings_number[-6:]) + 1
            else:
                self.Filings_number = 1

            # Ajusta el formato del número
            code_day = (
                str(timezone.now().year)
                + str(timezone.now().month).zfill(2)
                + str(timezone.now().day).zfill(2)
            )
            self.Filings_number = (
                self.Filings_td.FilingsType_code
                + code_day
                + str(self.Filings_number).zfill(6)
            )

        super().save(*args, **kwargs)

    def __str__(self):
        return self.Filings_number


class FilingsAddress(models.Model):
    FilingsAddress_filing = models.ForeignKey(Filings, on_delete=models.CASCADE)
    FilingsAddress_address = models.CharField("Dirección", max_length=255)


class FilingsUsers(models.Model):
    FilingsUsers_filing = models.ForeignKey(Filings, on_delete=models.CASCADE)
    FilingsUsers_user = models.ForeignKey(PublicUsers, on_delete=models.CASCADE)
