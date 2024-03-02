from django.contrib import admin
from django.urls import path, include, re_path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/user/', include("user.urls")),
    path('api/v1/book/', include("book.urls")),
    path('api/v1/review', include("review.urls")),
    path('api/v1/comment', include("comment.urls")),
    re_path('api/v1/auth/', include('djoser.urls')),
    re_path('api/v1/auth/', include('djoser.urls.jwt')),
    path('api/v1/favorite/', include("favorite.urls")),
    path('api/v1/vote/', include("vote.urls")),

]
