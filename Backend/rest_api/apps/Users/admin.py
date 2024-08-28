from django.contrib import admin
from apps.Users.models import PublicUsers, DocumentType 

# Register your models here.
@admin.register(PublicUsers)
class PublicUsersAdmin(admin.ModelAdmin):
    list_display = ["pu_dt","pu_number","pu_name", "pu_email"]

@admin.register(DocumentType)
class DocumentTypeAdmin(admin.ModelAdmin):
    list_display = ["dt_code", "dt_description"]