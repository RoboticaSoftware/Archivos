from django.db import models

class DocumentType(models.Model):
    dt_code = models.CharField(max_length=10, unique=True)
    dt_description = models.CharField(max_length=50)

    def save(self, *args, **kwargs):
        if not self.dt_code:
            self.dt_code = f'DT-{self.pk}'
        super().save(*args, **kwargs)

    def __str__(self):
        return self.dt_code+'-'+self.dt_description

class PublicUsers(models.Model):
    pu_dt = models.ForeignKey(DocumentType, on_delete=models.CASCADE)
    pu_number = models.CharField('Número de documento', max_length = 50)
    pu_name = models.CharField('Nombre', max_length=255)
    pu_email = models.EmailField('Correo electrónico', max_length=255, unique=True)
    pu_phone = models.CharField('Telefono', max_length=50, blank=True, null=True)
    pu_address = models.CharField('Dirección', max_length=255, blank=True, null=True)
    pu_created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        # Define una restricción única para la combinación de document_type y pu_number
        constraints = [
            models.UniqueConstraint(
                fields=['pu_dt', 'pu_number'],
                name='unique_document_number'
            )
        ]
    
    def __str__(self):
        return f'{self.pu_number} - {self.pu_name}'