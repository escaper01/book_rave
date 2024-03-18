from rest_framework import serializers
from comment.models import Comment
from user.models import Person
from django.utils import timezone


class CommentSerializer(serializers.ModelSerializer):
    owner_profile_pic = serializers.SerializerMethodField(source='person.avatar', read_only=True)
    added_by = serializers.SerializerMethodField(read_only=True)
    created_at = serializers.DateTimeField(default=timezone.now, format="%A, %B %d, %Y %I:%M %p")

    class Meta:
        model = Comment
        fields = [
            'review_id', 'content', 'created_at',
            'user','owner_profile_pic', 'added_by'
        ]
        extra_kwargs = {
            'content': {'min_length': 50, 'max_length': 500},
        }

    def get_owner_profile_pic(self, obj):
        person_review = Person.objects.filter(user=obj.user).first()
        if person_review.avatar:
            request = self.context.get('request')
            if request is not None:
                return request.build_absolute_uri(person_review.avatar.url)
        return None

    def get_added_by(self, obj):
        return obj.user.username if obj.user else None