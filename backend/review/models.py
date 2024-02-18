#from pyexpat import model
from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone
from book.models import Book


# Create your models here.
class Review(models.Model):
    owner = models.ForeignKey(User,on_delete=models.CASCADE,null=True)
    title = models.CharField(max_length=150, unique=True, blank=False, null=False)
    book = models.ForeignKey(Book, on_delete=models.CASCADE)
    img = models.ImageField(upload_to="uploads/reviews/%Y/%m/%d/")
    description = models.TextField()
    rating = models.DecimalField(max_digits=1, decimal_places=1)
    created_at = models.DateTimeField(default=timezone.now)

    class Meta:
        pass

    def __str__(self):
        self.title