from django.urls import path
from .views import getreview, allreview, allreview_noid, deletereview, addreview

urlpatterns = [
    path('v1/review/<id>', getreview, name='getreview'),
    path('v1/book/<id>/review', allreview, name='allreview'),
    path('v1/book/review', allreview_noid, name='allreview_noid'),
    path('v1/review/', allreview_noid, name='allreview_noid'),
    path('v1/delete/<id>', deletereview, name='deletereview'),
    path('v1/review/<id>/book', addreview, name='addreview'),
]