from django.db import models

# Create your models here.
class Book(models.Model):
    name = models.CharField(max_length=100, null=False, unique=True, blank=False)
    description = models.TextField()
    author = models.CharField(max_length=100, null=False, unique=True, blank=False)