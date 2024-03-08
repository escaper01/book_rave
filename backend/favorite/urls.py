from django.urls import path
from .views import add_favorite


urlpatterns = [
    path('<int:book_id>/', add_favorite),
]