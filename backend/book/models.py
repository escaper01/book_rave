from typing import Iterable
from django.db import models
from user.models import Person
from django.utils import timezone


class Book(models.Model):
    CATEGORY_CHOICES = (
        ('Mystery', 'Mystery'),
        ('Romance', 'Romance'),
        ('Science Fiction', 'Science Fiction'),
        ('Fantasy', 'Fantasy'),
        ('Self-help', 'Self-help'),
        ('Biography', 'Biography'),
        ('Horror', 'Horror'),
        ('Thriller', 'Thriller'),
        ('Tragedy', 'Tragedy'),
        ('Political', 'Political'),
        ('Experimental Literature', 'Experimental Literature'),
        ('Technical Instructional', 'Technical/Instructional'),
    )
    name = models.CharField(max_length=300, null=False, unique=True, blank=False)
    description = models.TextField(blank=False, null=False)
    author = models.CharField(max_length=100, null=False, blank=False)
    publication_date = models.DateField(blank=False, null=False)
    created_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(auto_now=True)
    category = models.CharField(max_length=26, choices=CATEGORY_CHOICES)
    added_by = models.ForeignKey(Person, on_delete=models.CASCADE, default=None)
    cover = models.ImageField(upload_to="uploads/books/%Y/%m/%d/", null=False, blank=False)


    def __str__(self):
        return self.name

    def get_book_name(self):
        return self.name