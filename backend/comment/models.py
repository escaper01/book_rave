from django.db import models
from django.contrib.auth.models import User
from review.models import Review
from django.utils import timezone
# Create your models here.


class Comment(models.Model):
    review_id = models.ForeignKey(Review, on_delete=models.CASCADE)
    content = models.TextField()
    created_at = models.DateTimeField(default=timezone.now)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    class Meta:
        pass

    def __str__(self):
        return "Comment from {} for Review {}".format(self.user.username, self.review_id)