# images/urls.py
from django.urls import path
from .views import ImageUploadView, ImageDeleteView

urlpatterns = [
    path('upload/', ImageUploadView.as_view(), name='image-upload'),
    path('delete/<int:pk>/', ImageDeleteView.as_view(), name='image-delete'),
]
