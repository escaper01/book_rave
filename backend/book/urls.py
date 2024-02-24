from django.urls import path
from .views import allbooks, onebook, onebook_noid, addbook

urlpatterns = [
    path('v1/allbooks/', allbooks, name='allbooks'),
    path('v1/get-book/', onebook_noid, name='onebook_noid'),
    path('v1/get-book/<id>', onebook, name='onebooks'),
    path('v1/add-book', addbook, name='addbook'),
    # Add other URL patterns for the app if needed
]