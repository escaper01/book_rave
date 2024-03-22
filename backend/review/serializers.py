from rest_framework import serializers
from .models import Review
from book.models import Book
from django.db.models import Avg
from user.models import Person
from django.utils import timezone
from comment.models import Comment
from vote.models import Vote


class ReviewSerializer(serializers.ModelSerializer):
    book_cover = serializers.ImageField(source='book.cover', read_only=True)
    added_by = serializers.CharField(source='owner.username', read_only=True)
    owner_profile_pic = serializers.SerializerMethodField(read_only=True)

    created_at = serializers.DateTimeField(default=timezone.now, format="%A, %B %d, %Y %I:%M %p")

    class Meta:
        model = Review
        fields = [
            'id', 'added_by', 'title', 'created_at','media',
            'content', 'rating', 'book', 'book_cover', 'owner_profile_pic'
        ]

    def get_owner_profile_pic(self, obj):
        person_review = Person.objects.get(user=obj.owner)
        if person_review.avatar:
            request = self.context.get('request')
            if request is not None:
                return request.build_absolute_uri(person_review.avatar.url)
        return None


class MinimalisticReviewSerializer(serializers.ModelSerializer):
    created_at = serializers.DateTimeField(default=timezone.now, format="%A, %B %d, %Y %I:%M %p")
    comments_count = serializers.SerializerMethodField(read_only=True)
    likes_count = serializers.SerializerMethodField(read_only=True)
    dislikes_count = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Review
        fields = [
            'id', 'title', 'created_at','media',
            'content', 'comments_count', 'likes_count',
            'dislikes_count'
        ]

    def get_comments_count(self, obj):
        return Comment.objects.filter(review_id=obj.id).count()

    def get_likes_count(self, obj):
        return Vote.objects.filter(object_id=obj.id, vote_type='UP').count()

    def get_dislikes_count(self, obj):
        return Vote.objects.filter(object_id=obj.id, vote_type='DOWN').count()