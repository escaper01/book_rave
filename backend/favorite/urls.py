from django.urls import path
from .views import addfavorite


urlpatterns = [
    path('v1/add/<id>/favorite', addfavorite, name='addfavorite'),
]