from django.urls import path

from . import views

urlpatterns = [
    path("get_profile_info", views.get_profile_info),
    path("update_profile_info", views.update_profile_info),
]