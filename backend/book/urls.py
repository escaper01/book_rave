from django.urls import path
from .views import allbooks, onebook, onebook_noid

urlpatterns = [
    path('v1/allbooks/', allbooks, name='allbooks'),
    path('v1/onebook/', onebook_noid, name='onebook_noid'),
    path('v1/onebook/<id>', onebook, name='onebooks'),
    # Add other URL patterns for the app if needed
]