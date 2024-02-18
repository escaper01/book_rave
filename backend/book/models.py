from django.db import models
from user.models import User
from django.utils import timezone

# Create your models here.
class Book(models.Model):
    title = models.CharField(max_length=100, null=False, unique=True, blank=False)
    description = models.TextField()
    author = models.CharField(max_length=100, null=False, unique=True, blank=False)
    publication_date = models.DateField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    added_by = models.ForeignKey(User, on_delete=models.CASCADE)
    image_url = models.URLField()

    class Meta:
        pass

    def __str__(self):
        return self.title
