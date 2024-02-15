from rest_framework import serializers
from backend.review.models import Review


class ReviewSerializer(serializers.ModelField):
    class Meta:
        model = Review
        fields = "__all__"