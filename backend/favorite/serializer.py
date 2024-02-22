from rest_framework import serializers
from backend.favorite.models import Favorite


class FavoriteSerializer(serializers.ModelField):
    class Meta:
        model = Favorite
        fields = "__all__"