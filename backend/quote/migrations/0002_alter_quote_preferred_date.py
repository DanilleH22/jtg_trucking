# Generated by Django 5.1.4 on 2025-01-04 18:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('quote', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='quote',
            name='preferred_date',
            field=models.DateField(),
        ),
    ]
