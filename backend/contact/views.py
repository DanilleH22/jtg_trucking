from django.shortcuts import render
from .serializers import ContactSerializer
from rest_framework import generics, status
from .models import Contact
from rest_framework.generics import CreateAPIView
from rest_framework.response import Response
from django.core.mail import send_mail
from rest_framework.permissions import AllowAny

class ContactUs(CreateAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
    permission_classes = [AllowAny]

    def get(self, request, *args, **kwargs):
        return Response({"message": "Contact endpoint is ready for POST requests."}, status=status.HTTP_200_OK)

    def post(self, request, *args, **kwargs):
        serializer = QuoteSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def perform_create(self, serializer):
        contact = serializer.save()
        send_mail(
            subject=f"New Contact Form Submission: {contact.subject}",
            message=f"Name: {contact.name}\nEmail: {contact.email}\nMessage: {contact.message}",
            from_email="noreply@yourdomain.com",
            recipient_list=["admin@yourdomain.com"],
        )





    

  