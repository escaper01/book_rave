from django.urls import path
from .views import get_review, all_reviews, delete_review, add_review,all_reviews_about_a_book

urlpatterns = [
    path('get-review/<int:review_id>', get_review),
    path('all-reviews/', all_reviews),
    path('all-reviews/<int:book_id>', all_reviews_about_a_book),
    path('delete-review/<int:review_id>', delete_review),
    path('add_review/<int:book_id>', add_review),
]