from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt, csrf_protect
from django.http.response import JsonResponse
from django.core.exceptions import ObjectDoesNotExist
from .models import Comment
from user.models import User
from review.models import Review
from .serializers import CommentSerializer
import json
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.decorators import permission_classes
from rest_framework.permissions import IsAuthenticated


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
@permission_classes([IsAuthenticated])
def addcomment(request, id=None):
    if request.method == 'POST':
        if request.content_type == 'application/json':
            jwt = JWTAuthentication()
            try:
                user, _ = jwt.authenticate(request)
            except Exception as e:
                return JsonResponse({'error': 'You need to Login First'}, status=401)
            mandatory_keys = ['content']
            missing_keys = []
            if id is not None:
                try:
                    temp = json.loads(request.body)
                    missing_keys = [key for key in mandatory_keys if key not in temp]
                    if missing_keys:
                        return JsonResponse({'error': f'Missing Key(s): {", ".join(missing_keys)}'}, status=400)
                    
                    review = Review.objects.get(pk=id)
                    
                    new_comment = Comment.objects.create(
                        review_id=review,
                        content=temp['content'],
                        user=user
                    )
                    serilizer = CommentSerializer(new_comment)
                    response_data = serilizer.data
                    response_data['username'] = user.username
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
@permission_classes([IsAuthenticated])
def updatecomment(request, id=0):
    if request.method == 'PUT':
        if request.content_type == 'application/json':
            jwt = JWTAuthentication()
            try:
                user, _ = jwt.authenticate(request)
            except Exception as e:
                return JsonResponse({'error': 'You need to Login'}, status=401)
            
            request_body = json.loads(request.body)
            try:
               comment = Comment.objects.get(id=id)
               if user == comment.user:
                    new_content= request_body.get('content')
                    if new_content is not None:
                        setattr(comment, 'content', new_content)
                        comment.save()
                        return JsonResponse({'message': 'comment content updated!'}, status=200)
               else:
                   return JsonResponse({'error': 'Unauthorized'}, status=403)
            except ObjectDoesNotExist:
                return JsonResponse({'error': 'No such Object'}, status=400)
        else:
            return JsonResponse({'error': 'Content type is not JSON'}, status=400)
    else:
        return JsonResponse({'error': 'Method Not Allowed'}, status=405)


@csrf_exempt
@permission_classes([IsAuthenticated])
def removecomment(request, id=0):
    if request.method == 'DELETE':
        jwt = JWTAuthentication()
        try:
            user, _ = jwt.authenticate(request)
        except Exception:
            return JsonResponse({'error': 'You need to Login'}, status=401)
        try:
            comment = Comment.objects.get(pk=id)
            if user == comment.user:
                comment.delete()
                return JsonResponse({'message': 'Comment Deleted!'}, status=200)
            else:
                return JsonResponse({'error': 'Unauthorized'}, status=403)
        except ObjectDoesNotExist:
            return JsonResponse({'error': 'No Comment'}, status=404)
    else:
        return JsonResponse({'error': 'Method Not Allowed'}, status=405)

@csrf_exempt
def no_id(request):
    return JsonResponse({'error': 'Please include the ID'}, status=400)
