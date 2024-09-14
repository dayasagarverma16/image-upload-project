# images/admin.py
from django.contrib import admin
from .models import Image

@admin.register(Image)
class ImageAdmin(admin.ModelAdmin):
    list_display = ['id', 'image', 'uploaded_at']
    search_fields = ['image']

# Alternatively:
# admin.site.register(Image) if you don't want to use the decorator style

