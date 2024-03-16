from rest_framework import serializers
from .models import Review
from book.models import Book


class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ['id','title', 'media', 'content', 'rating', 'book']
        extra_kwargs = {
            'media': {'required': False, 'allow_null': True}
        }