from django.urls import path
from .views import getcomments, getcomment, removecomment

urlpatterns = [
    path('v1/GetComment', getcomments, name='getcomments'),
    path('v1/getcomment/<id>', getcomment, name='getcomment'),
    path('v/deletecomment', removecomment, name='removecomment'),
]