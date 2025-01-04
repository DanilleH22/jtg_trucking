from django.shortcuts import render
from .serializers import QuoteSerializer
from rest_framework import generics, status
from .models import Quote
from rest_framework.generics import CreateAPIView
from rest_framework.response import Response
from django.core.mail import send_mail

# class RequestQuote(CreateAPIView):
#     queryset = Quote.objects.all()
#     serializer_class = QuoteSerializer

#     def get(self, request, *args, **kwargs):
#         return Response({"message": "Quote endpoint is ready for POST requests."}, status=status.HTTP_200_OK)

#     def perform_create(self, serializer):
#         quote = serializer.save()
        # send_mail(
        #     subject=f"New Quote Form Submission: {quote.subject}",
        #     message=f"Name: {quote.name}\nEmail: {quote.email}\nMessage: {quote.message}",
        #     from_email="noreply@yourdomain.com",
        #     recipient_list=["admin@yourdomain.com"],
        # )



from rest_framework.views import APIView

class RequestQuote(APIView):
    def get(self, request, *args, **kwargs):
        return Response({"message": "Quote endpoint is ready for POST requests."}, status=status.HTTP_200_OK)

    def post(self, request, *args, **kwargs):
        serializer = QuoteSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def perform_create(self, serializer):
        quote = serializer.save()
        # Example: Send an email notification
        send_mail(
            'New Quote Request',
            f'A new quote has been submitted: {quote}',
            'from@example.com',
            ['to@example.com'],
            fail_silently=False,
        )
