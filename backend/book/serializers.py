from dataclasses import fields
from rest_framework import serializers
from .models import Book


class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ["name", "description", "author", "publication_date", "added_by", "cover"]