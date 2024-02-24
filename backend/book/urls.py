from django.urls import path
from .views import allbooks, onebook

urlpatterns = [
    path('v1/allbooks/', allbooks, name='allbooks'),
    path('v1/onebook/<int:id>', onebook, name='onebooks'),
    # Add other URL patterns for the app if needed
]