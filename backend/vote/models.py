from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone
from django.contrib.contenttypes.models import ContentType
from django.contrib.contenttypes.fields import GenericForeignKey, GenericRelation
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
    
    # Add a GenericRelation to enable reverse querying
    related_votes = GenericRelation('self', related_query_name='votes')

    class Meta:
        pass
        