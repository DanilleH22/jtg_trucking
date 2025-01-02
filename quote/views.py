from django.shortcuts import render
from .serializers import QuoteSerializer
from rest_framework import generics, status
from .models import Quote
from rest_framework.generics import CreateAPIView
from rest_framework.response import Response
from django.core.mail import send_mail

class RequestQuote(CreateAPIView):
    queryset = Quote.objects.all()
    serializer_class = QuoteSerializer

    def get(self, request, *args, **kwargs):
        return Response({"message": "Quote endpoint is ready for POST requests."}, status=status.HTTP_200_OK)

    def perform_create(self, serializer):
        quote = serializer.save()
        # send_mail(
        #     subject=f"New Quote Form Submission: {quote.subject}",
        #     message=f"Name: {quote.name}\nEmail: {quote.email}\nMessage: {quote.message}",
        #     from_email="noreply@yourdomain.com",
        #     recipient_list=["admin@yourdomain.com"],
        # )