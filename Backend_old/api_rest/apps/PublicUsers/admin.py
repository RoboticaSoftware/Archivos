from django.contrib import admin
from apps.PublicUsers.models import PublicUsers, DocumentType

@admin.register(PublicUsers)
class PublicUsersAdmin(admin.ModelAdmin):
    list_display = ["public_user_td","public_user_numberTd","public_user_name", "public_user_email"]

@admin.register(DocumentType)
class DocumentTypeAdmin(admin.ModelAdmin):
    list_display = ["DocumentType_code", "DocumentType_description"]