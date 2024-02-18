from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone
from django.contrib.contenttypes.models import ContentType
from django.contrib.contenttypes.fields import GenericForeignKey
# Create your models here.


class Vote(models.Model):
    VoteType = (
        ('UP', 'LIKE'),
        ('DOWN', 'DISLIKE'),
        )
    vote_type = models.CharField(max_length=4, choices=VoteType)
    created_at = models.DateTimeField(default=timezone.now)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    # Detect which Object Review or Comment
    content_type = models.ForeignKey(ContentType, on_delete=models.CASCADE)
    # Extract the Object id
    object_id = models.PositiveIntegerField()
    # Build the FK
    content_object = GenericForeignKey('content_type', 'object_id')

    
    # method to track Votes