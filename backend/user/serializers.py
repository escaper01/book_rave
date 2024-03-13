from dataclasses import fields
from rest_framework import serializers
from .models import Person


class PersonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Person
        fields = ['user', 'avatar', 'city']
        extra_kwargs = {
            'user': {'default': serializers.CurrentUserDefault(), },
        }


        