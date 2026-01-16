from django.contrib import admin
from . models import Futsal

class FutsalAdmin(admin.ModelAdmin):
    list_display = ("name", "location")
    prepopulated_fields = {"slug" : ("name", "location")}

admin.site.register(Futsal, FutsalAdmin)
