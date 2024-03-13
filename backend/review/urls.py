from django.urls import path
from .views import get_review, all_review, delete_review, add_review

urlpatterns = [
    path('<int:review_id>', get_review),
    path('<int:book_id>/book', all_review),
    path('v1/delete/<int:review_id>', delete_review),
    path('book/<int:book_id>', add_review),
]