from rest_framework import serializers
from .models import Review
from book.models import Book


class ReviewSerializer(serializers.ModelSerializer):
    book_cover = serializers.ImageField(source='book.cover', read_only=True)
    class Meta:
        model = Review
        fields = ['id','title','content', 'rating', 'book','media', 'book_cover']