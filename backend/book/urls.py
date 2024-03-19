from django.urls import path
from . import views


urlpatterns = [
    path('all-books', views.all_books),
    path('get-book/<int:book_id>', views.get_book),
    path('add-book', views.add_book),
    path('update-book/<int:book_id>', views.update_book),
    path('delete-book/<int:book_id>', views.delete_book),
    path('search', views.search),
    path('bundled_books/<str:category>', views.get_books_bundle)
]