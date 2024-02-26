from django.urls import path
from .views import getcomments, getcomment, removecomment, addcomment, updatecomment, no_id

urlpatterns = [
    path('v1/review/<id>/comments', getcomments, name='getcomments'),
    path('v1/getcomment/<id>', getcomment, name='getcomment'),
    path('v1/getcomment/', no_id, name='getcomment_noid'),
    path('v1/deletecomment/<id>', removecomment, name='removecomment'),
    path('v1/deletecomment/', no_id, name='no_id'),
    path('v1/addcomment/<id>', addcomment, name='addcomment'),
    path('v1/addcomment/', no_id, name='no_id_add'),
    path('v1/update/comment/', updatecomment, name='updatecomment'),
]