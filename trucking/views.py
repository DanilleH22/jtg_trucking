from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.urls import path, include

@api_view()
def root_route(request):
    return Response({
        "message": "Welcome to my drf API!"
    })