from django.db import models
from django.contrib.auth.models import User
from review.models import Review
from django.utils import timezone
# Create your models here.


class Vote(models.Model):
    review_id = models.ForeignKey(Review, on_delete=models.CASCADE)
    # comment_id = ""
    # vote_type = ""
    created_at = models.DateTimeField(default=timezone.now)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)