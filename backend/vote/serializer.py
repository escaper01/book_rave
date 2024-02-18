from rest_framework import serializers
from backend.vote.models import Vote


class VoteSerializer(serializers.ModelField):
    class Meta:
        model = Vote
        fields = "__all__"