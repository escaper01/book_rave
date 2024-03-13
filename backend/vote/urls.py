from django.urls import path
from .views import like_view, dislike_view

urlpatterns = [
    path('<str:content_type>/<int:pk>/like', like_view),
    path('<str:content_type>/<int:pk>/dislike', dislike_view)
]