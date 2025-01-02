from .models import Quote
from rest_framework import serializers


class QuoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Quote
        fields = ['name', 'company', 'email', 'phone_number', 'pickup_location', 'drop_off_location', 'preferred_date','type_of_freight', 'weight_of_freight', 'additional_services']