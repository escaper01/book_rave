from django.urls import path
from .views import all_books, get_book, add_book, update_book, delete_book

urlpatterns = [
    path('all-books/', all_books),
    path('get-book/<int:book_id>', get_book),
    path('add-book/', add_book),
    path('update-book/<int:book_id>', update_book),
    path('delete-book/<int:book_id>', delete_book),
]