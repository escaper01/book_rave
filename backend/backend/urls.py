from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from rest_framework_simplejwt.views import TokenBlacklistView

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/v1/user/", include("user.urls")),
    path("api/v1/book/", include("book.urls")),
    path("api/v1/review/", include("review.urls")),
    path("api/v1/comment/", include("comment.urls")),
    path("api/v1/auth/", include("djoser.urls")),
    path("api/v1/auth/", include("djoser.urls.jwt")),
    path("api/v1/auth/blacklist", TokenBlacklistView.as_view()),
    path("api/v1/favorite/", include("favorite.urls")),
    path("api/v1/vote/", include("vote.urls")),

]

if settings.DEUBG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
