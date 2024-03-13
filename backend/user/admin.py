from django.contrib import admin
from .models import Person

class PersonAdmin(admin.ModelAdmin):
	list_display = ('user', 'avatar', 'city')

admin.site.register(Person, PersonAdmin)