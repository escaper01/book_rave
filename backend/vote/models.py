from django.db import models
from django.contrib.auth.models import User
from review.models import Review
from comment.models import Comment
from django.utils import timezone
# Create your models here.


class Vote(models.Model):
    VoteType = (
        ('UP', 'LIKE'),
        ('DOWN', 'DISLIKE'),
        )
    review_id = models.ForeignKey(Review, on_delete=models.CASCADE)
    comment_id = models.ForeignKey(Comment, on_delete=models.CASCADE)
    vote_type = models.CharField(max_length=4, choices=VoteType)
    created_at = models.DateTimeField(default=timezone.now)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)

    # method to track Votes