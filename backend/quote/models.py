from django.db import models

# Create your models here.

class Quote(models.Model):
    name = models.CharField(max_length=150, blank=False)
    company = models.CharField(max_length=200, blank=True)
    email = models.CharField(max_length=150, blank=False)
    phone_number = models.CharField(max_length=15, blank=False)
    pickup_location = models.CharField(max_length=200, blank=False)
    drop_off_location = models.CharField(max_length=200, blank=False)
    preferred_date = models.DateField(blank=False)
    type_of_freight = models.CharField(max_length=200, blank=False)
    weight_of_freight = models.CharField(max_length=20, blank=True)
    additional_services = models.TextField(max_length=500, blank=True)

    def __str__(self):
        return f"Demo request from {self.name}"