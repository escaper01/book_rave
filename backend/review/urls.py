from django.urls import path
from .views import getreview, allreview

urlpatterns = [
    path('v1/review/<id>', getreview, name='getreview'),
    path('v1/book/<id>/review', allreview, name='allreview'),
]