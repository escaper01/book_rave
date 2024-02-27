from django.urls import path
from .views import like_view, dislike_view

urlpatterns = [
    path('v1/<str:content_type>/<pk>/like', like_view, name='like_view'),
    path('v1/<str:content_type>/<pk>/dislike', dislike_view, name='dislike_view')
]