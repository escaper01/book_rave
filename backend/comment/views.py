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
            return JsonResponse({'error': 'no such comment'}, status=404)
    else:
        return JsonResponse({'error': 'Method Not Allowed'}, status=405)


@csrf_exempt
def addcomment(request, id=None):
    if request.method == 'POST':
        if request.content_type == 'application/json':
            mandatory_keys = ['content', 'user']
            missing_keys = []
            if id is not None:
                try:
                    temp = json.loads(request.body)
                    missing_keys = [key for key in mandatory_keys if key not in temp]
                    if missing_keys:
                        return JsonResponse({'error': f'Missing Key(s): {", ".join(missing_keys)}'}, status=400)
                    
                    review = Review.objects.get(pk=id)
                    userid = temp.get('user')
                    user = User.objects.get(pk=userid)
                    username = user.username
                    
                    new_comment = Comment.objects.create(
                        review_id=review,
                        content=temp['content'],
                        user=user
                    )
                    serilizer = CommentSerializer(new_comment)
                    response_data = serilizer.data
                    response_data['username'] = username
                    return JsonResponse(response_data, status=201)
                
                except ObjectDoesNotExist:
                    return JsonResponse({'error': 'Review or User does not exist'}, status=404)
                
                except json.JSONDecodeError:
                    return JsonResponse({'error': 'Invalid JSON format in request body'}, status=400)
                    
            else:
                return JsonResponse({'error': 'No Review to Comment'})
        else:
            return JsonResponse({'error': 'Content type is Not Json'}, status=400)
    else:
        return JsonResponse({'error': 'Method Not Allowed'}, status=405)

@csrf_exempt
def updatecomment(request):
    pass


@csrf_exempt
def removecomment(request, id=0):
    if request.method == 'DELETE':
        try:
            comment = Comment.objects.get(pk=id)
            comment.delete()
            return JsonResponse({'message': 'Comment Deleted!'}, status=200)
        except ObjectDoesNotExist:
            return JsonResponse({'error': 'No Comment'}, status=404)
    else:
        return JsonResponse({'error': 'Method Not Allowed'}, status=405)

@csrf_exempt
def no_id(request):
    return JsonResponse({'error': 'Please include the ID'}, status=400)
