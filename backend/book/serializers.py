from dataclasses import fields
from rest_framework import serializers
from .models import Book
from django.db.models import Avg

class BookSerializer(serializers.ModelSerializer):
    global_rating = serializers.IntegerField(read_only=True)
    class Meta:
        model = Book
        fields = ['id', 'name', 'description', 'global_rating', 'author', 'publication_date', 'created_at', 'updated_at', 'added_by', 'cover', 'category']
        extra_kwargs = {
            'description': {'min_length': 50, 'max_length': 3000},
            'added_by': {'default': serializers.CurrentUserDefault(), },
        }
    
    def to_representation(self, instance):
        data = super().to_representation(instance)
        # Calculate global_rating
        reviews = instance.review_set.all()
        if reviews.exists():
            global_rating = reviews.aggregate(Avg('rating'))['rating__avg']
            data['global_rating'] = int(global_rating)
        else:
            data['global_rating'] = 0
        return data


class BookSerializerMin(serializers.ModelSerializer):
    global_rating = serializers.IntegerField(read_only=True)

    class Meta:
        model = Book
        fields = ['id', 'name', 'author', 'global_rating', 'publication_date', 'created_at','cover', 'category']

    def to_representation(self, instance):
        data = super().to_representation(instance)
        # Calculate global_rating
        reviews = instance.review_set.all()
        if reviews.exists():
            global_rating = reviews.aggregate(Avg('rating'))['rating__avg']
            data['global_rating'] = int(global_rating)
        else:
            data['global_rating'] = 0
        return data