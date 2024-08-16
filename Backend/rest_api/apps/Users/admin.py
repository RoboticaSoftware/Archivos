from django.contrib import admin
from apps.Users.models import PublicUsers, DocumentType 

# Register your models here.
@admin.register(PublicUsers)
class PublicUsersAdmin(admin.ModelAdmin):
    list_display = ["public_user_dt","public_user_number","public_user_name", "public_user_email"]

@admin.register(DocumentType)
class DocumentTypeAdmin(admin.ModelAdmin):
    list_display = ["DocumentType_code", "DocumentType_description"]