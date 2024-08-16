from django.db import models

class DocumentType(models.Model):
    DocumentType_code = models.CharField(max_length=10, unique=True)
    DocumentType_description = models.CharField(max_length=50)

    def save(self, *args, **kwargs):
        if not self.DocumentType_code:
            self.DocumentType_code = f'DT-{self.pk}'
        super().save(*args, **kwargs)

    def __str__(self):
        return self.DocumentType_description

class PublicUsers(models.Model):
    public_user_td = models.ForeignKey(DocumentType, on_delete=models.CASCADE)
    public_user_numberTd = models.CharField('Número de documento', max_length = 50)
    public_user_name = models.CharField('Nombre', max_length=255)
    public_user_email = models.EmailField('Correo electrónico', max_length=255, unique=True)
    public_user_phone = models.CharField('Telefono', max_length=50, blank=True, null=True)
    public_user_created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        # Define una restricción única para la combinación de document_type y public_user_numberTd
        constraints = [
            models.UniqueConstraint(
                fields=['public_user_td', 'public_user_numberTd'],
                name='unique_document'
            )
        ]
    
    def __str__(self):
        return f'{self.public_user_numberTd} - {self.public_user_name}'