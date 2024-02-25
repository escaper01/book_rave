from rest_framework import serializers
from comment.models import Comment


class CommentSerializer(serializers.ModelField):
    class Meta:
        model = Comment
        fields = "__all__"