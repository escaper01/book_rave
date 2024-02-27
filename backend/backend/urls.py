from django.contrib import admin
from django.urls import path, include, re_path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('user/', include("user.urls")),
    path('api/', include("book.urls")),
    path('api/', include("review.urls")),
    path('api/', include("comment.urls")),
    re_path('auth/', include('djoser.urls')),
    re_path('auth/', include('djoser.urls.jwt')),
    # path('api/', include("favorite.urls")),
    path('api/', include("vote.urls")),
]
