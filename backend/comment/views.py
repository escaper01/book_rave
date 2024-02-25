from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt, csrf_protect
from django.http.response import JsonResponse
from django.core.exceptions import ObjectDoesNotExist
from .models import Review
from user.models import User
from review.models import Review
from .serializers import CommentSerializer
import json

@csrf_exempt
def getcomments(request):
    pass


@csrf_exempt
def getcomment(request, id=0):
    pass

@csrf_exempt
def addcomment(request):
    pass

@csrf_exempt
def updatecomment(request):
    pass

@csrf_exempt
def removecomment(request, id=0):
    pass

