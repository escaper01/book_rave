from rest_framework import serializers
from .models import Review
from book.models import Book


class ReviewSerializer(serializers.ModelSerializer):
    book_cover = serializers.ImageField(source='book.cover', read_only=True)
    # media = serializers.SerializerMethodField()
    class Meta:
        model = Review
        fields = ['id','title','content', 'rating', 'book','media', 'book_cover']



    # def get_book_cover(self, obj):
    #     # Check if the book_cover field exists in the book object
    #     if hasattr(obj.book, 'cover'):
    #         # Get the URL of the book_cover field and return the absolute URL
    #         return self.context['request'].build_absolute_uri(obj.book.cover.url)
    #     else:
    #         return None

    # def get_media(self, obj):
    #     # Check if the media field exists in the review object
    #     if obj.media:
    #         # Get the URL of the media field and return the absolute URL
    #         return self.context['request'].build_absolute_uri(obj.media.url)
    #     else:
    #         return None