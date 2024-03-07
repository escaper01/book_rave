from rest_framework import serializers
from .models import Review
from book.models import Book


class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ['title', 'media', 'content', 'rating', 'book']