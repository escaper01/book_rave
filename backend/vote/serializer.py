from rest_framework import serializers
from .models import Vote
from django.contrib.contenttypes.models import ContentType
from review.models import Review

class VoteSerializer(serializers.ModelSerializer):
    post_likes_count = serializers.SerializerMethodField(read_only=True)
    post_dislikes_count = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = Vote
        fields = ["post_likes_count", "post_dislikes_count"]

    def get_post_likes_count(self, obj):
        review_votes = Vote.objects.filter(
            content_type=ContentType.objects.get_for_model(Review),
            vote_type="UP"
        )
        return review_votes.count()

    def get_post_dislikes_count(self, obj):
        review_votes = Vote.objects.filter(
            content_type=ContentType.objects.get_for_model(Review),
            vote_type="DOWN"
        )
        return review_votes.count()