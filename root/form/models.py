from django.db import models

# Create your models here.

# Event models
class Event(models.Model):
    name = models.CharField(max_length=200)
    venue = models.CharField(max_length=200)
    price = models.DecimalField(max_digits=9, decimal_places=2)
    attendees = models.IntegerField()
    event_image = models.ImageField(upload_to ='uploads/', default="")