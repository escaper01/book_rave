from django.db import models
from book.models import Book
from django.contrib.auth.models import User

# Create your models here.

class Favorite(models.Model):
    book_id = models.ForeignKey(Book, on_delete=models.CASCADE)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)

    class Meta:
        pass