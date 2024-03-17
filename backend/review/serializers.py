from rest_framework import serializers
from .models import Review
from book.models import Book
from django.db.models import Avg
from user.models import Person
from django.utils import timezone


class ReviewSerializer(serializers.ModelSerializer):
    book_cover = serializers.ImageField(source='book.cover', read_only=True)
    posted_by =serializers.CharField(source='owner.username', read_only=True)
    one_star_ratings = serializers.SerializerMethodField(read_only=True)
    two_star_ratings = serializers.SerializerMethodField(read_only=True)
    three_star_ratings = serializers.SerializerMethodField(read_only=True)
    four_star_ratings = serializers.SerializerMethodField(read_only=True)
    five_star_ratings = serializers.SerializerMethodField(read_only=True)

    global_rating = serializers.SerializerMethodField(read_only=True)
    owner_profile_pic = serializers.SerializerMethodField(read_only=True)
    created_at = serializers.DateTimeField(default=timezone.now, format="%A, %B %d, %Y %I:%M %p")

    class Meta:
        model = Review
        fields = ['id','posted_by','title', 'created_at',
        'content','rating', 'book', 'global_rating',
        'media', 'book_cover', 'one_star_ratings',
        'two_star_ratings', 'three_star_ratings',
        'four_star_ratings', 'five_star_ratings', 'owner_profile_pic'
        ]

    def get_owner_profile_pic(self, obj):
        person_review = Person.objects.filter(user=obj.owner).first()
        if person_review.avatar:
            request = self.context.get('request')
            if request is not None:
                return request.build_absolute_uri(person_review.avatar.url)
        return None

    def get_global_rating(self, obj):
        all_related_reviews = Review.objects.filter(book=obj.book)

        if all_related_reviews.exists():
            all_ratings_avg = all_related_reviews.aggregate(Avg('rating'))['rating__avg']
            return all_ratings_avg
        return 0

    def get_one_star_ratings(self, obj):
        return obj.book.review_set.filter(rating=1).count()

    def get_two_star_ratings(self, obj):
        return obj.book.review_set.filter(rating=2).count()

    def get_three_star_ratings(self, obj):
        return obj.book.review_set.filter(rating=3).count()

    def get_four_star_ratings(self, obj):
        return obj.book.review_set.filter(rating=4).count()

    def get_five_star_ratings(self, obj):
        return obj.book.review_set.filter(rating=5).count()


