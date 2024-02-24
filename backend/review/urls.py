from django.urls import path
from .views import getreview

urlpatterns = [
    path('v1/review/<id>', getreview, name='getreview'),
]