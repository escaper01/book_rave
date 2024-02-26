from django.urls import path
from .views import getcomments, getcomment, removecomment, addcomment, updatecomment

urlpatterns = [
    path('v1/review/<id>/comments', getcomments, name='getcomments'),
    path('v1/getcomment/<id>', getcomment, name='getcomment'),
    path('v/deletecomment', removecomment, name='removecomment'),
    path('v1/addcomment', addcomment, name='addcomment'),
    path('v1/updatecomment', updatecomment, name='updatecomment'),
]