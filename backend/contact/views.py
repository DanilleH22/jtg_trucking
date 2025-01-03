from django.shortcuts import render
from .serializers import ContactSerializer
from rest_framework import generics, status
from .models import Contact
from rest_framework.generics import CreateAPIView
from rest_framework.response import Response
from django.core.mail import send_mail

class ContactUs(CreateAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer

    def get(self, request, *args, **kwargs):
        return Response({"message": "Contact endpoint is ready for POST requests."}, status=status.HTTP_200_OK)

    def perform_create(self, serializer):
        contact = serializer.save()
        # send_mail(
        #     subject=f"New Contact Form Submission: {contact.subject}",
        #     message=f"Name: {contact.name}\nEmail: {contact.email}\nMessage: {contact.message}",
        #     from_email="noreply@yourdomain.com",
        #     recipient_list=["admin@yourdomain.com"],
        # )