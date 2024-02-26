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
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    content_type = models.ForeignKey(ContentType, on_delete=models.CASCADE)
    object_id = models.PositiveIntegerField()
    content_object = GenericForeignKey('content_type', 'object_id')

    class Meta:
        pass

    def track_votes(self):
        up = Vote.objects.filter(content_type=self.content_type, object_id=self.object_id, vote_type='UP').count()
        down = Vote.objects.filter(content_type=self.content_type, object_id=self.object_id, vote_type='DOWN').count()
        return {'upvotes': up, 'downvotes': down}
        