from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt, csrf_protect
from django.http.response import JsonResponse
from django.core.exceptions import ObjectDoesNotExist
from .models import Comment
from user.models import User
from review.models import Review
from .serializers import CommentSerializer
import json

@csrf_exempt
def getcomments(request, id=0):
    if request.method == 'GET':
            try:
                review = Review.objects.get(pk=id)
                comments = Comment.objects.filter(review_id=id)
                serialize = CommentSerializer(comments, many=True)
                return JsonResponse(serialize.data, safe=False, status=200)
            except ObjectDoesNotExist:
                return JsonResponse({'error': 'no such review'}, status=404)
    else:
        return JsonResponse({'error': 'Method Not Allowed'}, status=405)


@csrf_exempt
def getcomment(request, id=0):
    if request.method == 'GET':
        try:
            comment = Comment.objects.get(pk=id)
            serializer = CommentSerializer(comment)
            return JsonResponse(serializer.data, safe=False, status=200)
        except ObjectDoesNotExist:
            JsonResponse({'error': 'no such comment'}, status=404)
    else:
        return JsonResponse({'error': 'Method Not Allowed'}, status=405)


@csrf_exempt
def addcomment(request):
    pass

@csrf_exempt
def updatecomment(request):
    pass

@csrf_exempt
def removecomment(request, id=0):
    pass

