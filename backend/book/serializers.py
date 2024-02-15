from dataclasses import fields
from rest_framework import serializers
from backend.book.models import Book


class BookSerializer(serializers.ModelField):
    class Meta:
        model = Book
        fields = "__all__"