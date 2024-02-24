from django.urls import path
from .views import getreview, allreview, allreview_noid

urlpatterns = [
    path('v1/review/<id>', getreview, name='getreview'),
    path('v1/book/<id>/review', allreview, name='allreview'),
    path('v1/book/review', allreview_noid, name='allreview_noid'),
]