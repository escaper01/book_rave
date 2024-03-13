from dataclasses import fields
from rest_framework import serializers
from .models import Book


class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ['id', 'name', 'description', 'author', 'publication_date', 'created_at', 'updated_at', 'added_by', 'cover', 'category']
        extra_kwargs = {
            'description': {'min_length': 100, 'max_length': 400},
            'added_by': {'default': serializers.CurrentUserDefault(), },
        }


        