# images/views.py
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Image
from .serializers import ImageSerializer
from django.http import Http404

class ImageUploadView(APIView):
    def post(self, request, format=None):
        serializer = ImageSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ImageDeleteView(APIView):
    def delete(self, request, pk, format=None):
        try:
            image = Image.objects.get(pk=pk)
        except Image.DoesNotExist:
            raise Http404
        image.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
