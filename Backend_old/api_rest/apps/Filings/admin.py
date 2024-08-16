from django.contrib import admin
from .models import FilingsType, Filings, FilingsAddress, FilingsUsers

@admin.register(FilingsType)
class PublicUsersAdmin(admin.ModelAdmin):
    list_display = ["FilingsType_description"]

@admin.register(Filings)
class PublicUsersAdmin(admin.ModelAdmin):
    list_display = ["Filings_td","Filings_number", "Filings_description", "Filings_receive_at_home"]

@admin.register(FilingsAddress)
class PublicUsersAdmin(admin.ModelAdmin):
    list_display = ["FilingsAddress_filing", "FilingsAddress_address"]

@admin.register(FilingsUsers)
class PublicUsersAdmin(admin.ModelAdmin):
    list_display = ["FilingsUsers_filing", "FilingsUsers_user"]


