# Generated by Django 5.1.4 on 2025-01-02 21:44

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Quote',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=150)),
                ('company', models.CharField(blank=True, max_length=200)),
                ('email', models.CharField(max_length=150)),
                ('phone_number', models.CharField(max_length=15)),
                ('pickup_location', models.CharField(max_length=200)),
                ('drop_off_location', models.CharField(max_length=200)),
                ('preferred_date', models.CharField(max_length=15)),
                ('type_of_freight', models.CharField(max_length=200)),
                ('weight_of_freight', models.CharField(blank=True, max_length=20)),
                ('additional_services', models.TextField(blank=True, max_length=500)),
            ],
        ),
    ]
