from dataclasses import fields
from rest_framework import serializers
from .models import Book
from django.db.models import Avg
from review.models import Review
from django.db.models import Avg


class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ['id', 'name', 'description', 'author', 'publication_date', 'created_at', 'updated_at', 'added_by',
                  'cover', 'category']
        extra_kwargs = {
            'description': {'min_length': 50, 'max_length': 3000},
            'added_by': {'default': serializers.CurrentUserDefault(), },
        }


class MinimalisticBookSerializer(serializers.ModelSerializer):
    global_rating = serializers.IntegerField(read_only=True)

    class Meta:
        model = Book
        fields = ['id', 'name', 'cover', 'global_rating']

    def get_global_rating(self, obj):
        all_related_reviews = Review.objects.filter(book=obj)
        if all_related_reviews.exists():
            all_ratings_avg = all_related_reviews.aggregate(Avg('rating'))['rating__avg']
            return all_ratings_avg
        return 0


class StatisticsBookSerializer(serializers.ModelSerializer):
    one_star_ratings = serializers.SerializerMethodField(read_only=True)
    two_star_ratings = serializers.SerializerMethodField(read_only=True)
    three_star_ratings = serializers.SerializerMethodField(read_only=True)
    four_star_ratings = serializers.SerializerMethodField(read_only=True)
    five_star_ratings = serializers.SerializerMethodField(read_only=True)

    global_rating = serializers.SerializerMethodField(read_only=True)
    review_total = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Book
        fields = ['id', 'global_rating', 'review_total', 'one_star_ratings',
                  'two_star_ratings', 'three_star_ratings', 'four_star_ratings',
                  'five_star_ratings']

    def get_review_total(self, obj):
        all_related_reviews_count = Review.objects.filter(book=obj).count()
        return all_related_reviews_count

    def get_global_rating(self, obj):
        all_related_reviews = Review.objects.filter(book=obj)

        if all_related_reviews.exists():
            all_ratings_avg = all_related_reviews.aggregate(Avg('rating'))['rating__avg']
            return all_ratings_avg
        return 0

    def get_one_star_ratings(self, obj):
        return obj.review_set.filter(rating=1).count()

    def get_two_star_ratings(self, obj):
        return obj.review_set.filter(rating=2).count()

    def get_three_star_ratings(self, obj):
        return obj.review_set.filter(rating=3).count()

    def get_four_star_ratings(self, obj):
        return obj.review_set.filter(rating=4).count()

    def get_five_star_ratings(self, obj):
        return obj.review_set.filter(rating=5).count()
