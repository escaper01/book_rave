from dataclasses import fields
from rest_framework import serializers
from .models import Book
from django.db.models import Avg
from review.models import Review
from django.db.models import Avg


class BookSerializer(serializers.ModelSerializer):
    global_rating = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Book
        fields = ['id', 'name', 'description', 'global_rating', 'author', 'publication_date', 'created_at', 'updated_at', 'added_by', 'cover', 'category']
        extra_kwargs = {
            'description': {'min_length': 50, 'max_length': 3000},
            'added_by': {'default': serializers.CurrentUserDefault(), },
        }

    def get_global_rating(self, obj):
        all_related_reviews = Review.objects.filter(book=obj)
        if all_related_reviews.exists():
            all_ratings_avg = all_related_reviews.aggregate(Avg('rating'))['rating__avg']
            return all_ratings_avg
        return 0


class BookSerializerMin(serializers.ModelSerializer):
    global_rating = serializers.IntegerField(read_only=True)

    class Meta:
        model = Book
        fields = ['id', 'name', 'author', 'global_rating', 'publication_date', 'created_at','cover', 'category']

    def get_global_rating(self, obj):
        all_related_reviews = Review.objects.filter(book=obj)
        if all_related_reviews.exists():
            all_ratings_avg = all_related_reviews.aggregate(Avg('rating'))['rating__avg']
            return all_ratings_avg
        return 0


class MinimalisticBookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ['id', 'name','cover']