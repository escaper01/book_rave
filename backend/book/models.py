from typing import Iterable
from django.db import models
from user.models import Person
from django.utils import timezone


class Book(models.Model):
    name = models.CharField(max_length=100, null=False, unique=True, blank=False)
    description = models.TextField(blank=False, null=False)
    author = models.CharField(max_length=100, null=False, blank=False)
    publication_date = models.DateField(blank=False, null=False)
    created_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(auto_now=True)
    # in View Create_model , make sure to extract the request first_name & last_name
    added_by = models.ForeignKey(Person, on_delete=models.CASCADE, default=None)
    # Will Be Updated to handle S3 Bucket Storage
    cover = models.ImageField(upload_to="uploads/books/%Y/%m/%d/", default=None, null=False, blank=False)

    def __str__(self):
        return self.name
    
    def get_book_name(self):
        return self.name