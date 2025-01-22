from django.shortcuts import render
from .serializers import ContactSerializer
from rest_framework import generics, status
from .models import Contact
from rest_framework.response import Response
from django.core.mail import send_mail
from rest_framework.permissions import AllowAny
from rest_framework.views import APIView

class ContactUs(APIView):
    # permission_classes = [AllowAny] 

    # def get(self, request, *args, **kwargs):
    #     return Response({"message": "Contact endpoint is ready for POST requests."}, status=status.HTTP_200_OK)

    # def post(self, request, *args, **kwargs):
    #     serializer = ContactSerializer(data=request.data)
    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response(serializer.data, status=status.HTTP_201_CREATED)
    #     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # def options(self, request, *args, **kwargs):
    #     """
    #     Explicitly handle OPTIONS requests if necessary.
    #     """
    #     return Response(status=status.HTTP_200_OK)

    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
    permission_classes = [AllowAny]
