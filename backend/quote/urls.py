from django.urls import path
from .views import RequestQuote

urlpatterns = [
    path('quote/', RequestQuote.as_view(), name='request_quote')
]
