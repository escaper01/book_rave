from rest_framework import serializers
from favorite.models import Favorite
from django.conf import settings


class FavoriteSerializer(serializers.ModelSerializer):
    book_cover = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Favorite
        fields = [
            "book_cover", "book_id"
        ]

    def get_book_cover(self, obj):
        if obj.book_id.cover:
            request = self.context.get('request')
            if request is not None:
                return request.build_absolute_uri(obj.book_id.cover.url)
        return None

