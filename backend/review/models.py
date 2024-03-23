from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone
from book.models import Book
from django.core.validators import MaxValueValidator, MinValueValidator


class Review(models.Model):
    owner = models.ForeignKey(User,on_delete=models.CASCADE,null=True)
    title = models.CharField(max_length=150, unique=False, blank=False, null=False)
    book = models.ForeignKey(Book, on_delete=models.CASCADE)
    media = models.ImageField(upload_to="uploads/reviews/%Y/%m/%d/", blank=True, null=True)
    content = models.TextField()
    rating = models.IntegerField(validators=[ MaxValueValidator(5), MinValueValidator(1) ])
    created_at = models.DateTimeField(default=timezone.now)

    class Meta:
        pass

    def __str__(self):
        return "Review from {} for {} Book".format(self.owner.username, self.book.name)


