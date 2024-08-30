from django.contrib import admin
from apps.Records.models import Records, RecordType


# Register your models here.
@admin.register(RecordType)
class RecordTypeAdmin(admin.ModelAdmin):
    list_display = ["rt_code", "rt_description"]

@admin.register(Records)
class DocumentTypeAdmin(admin.ModelAdmin):
    list_display = [
        "r_create_at",
        "r_rt",
        "r_number",
        "r_description",
        "r_receive_at_home",
        "r_user",
        "r_attached_file",
        ]