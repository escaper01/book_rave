from django.urls import path
from .views import add_favorite, favorite_list, book_mark_checker


urlpatterns = [
    path('add-favorite/<int:book_id>', add_favorite),
    path('favorite-list', favorite_list),
    path('bookmark-checker/<int:book_id>', book_mark_checker),
]