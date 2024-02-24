from typing import Iterable
from django.db import models
from user.models import User
from django.utils import timezone

# Create your models here.
class Book(models.Model):
    name = models.CharField(max_length=100, null=False, unique=True, blank=False)
    description = models.TextField()
    author = models.CharField(max_length=100, null=False, unique=True, blank=False)
    publication_date = models.DateField(null=True)
    created_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(auto_now=True)
    # in View Create_model , make sure to extract the request first_name & last_name
    added_by = models.ForeignKey(User, on_delete=models.CASCADE, default=None)
    # Will Be Updated to handle S3 Bucket Storage
    cover = models.ImageField(upload_to="uploads/books/%Y/%m/%d/", default=None)

    class Meta:
        pass
    
    def __str__(self):
        return self.name
    
    # Since the added_by is mandatory , I assign to the admin for Dev pupose ONLY
    def save(self, *args, **kwargs):
        if self.added_by_id is None:
            default_user = User.objects.get(username='younesdev')
            self.added_by = default_user
        super(Book, self).save(*args, **kwargs)