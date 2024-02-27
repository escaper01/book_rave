from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt, csrf_protect
from django.http.response import JsonResponse
from django.core.exceptions import ObjectDoesNotExist
from .models import Review
from user.models import User
from book.models import Book
from .serializers import ReviewSerializer
import json
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.decorators import permission_classes
from rest_framework.permissions import IsAuthenticated


@csrf_exempt
def getreview(request, id=0):
    if request.method == 'GET':
        try:
            review = Review.objects.get(pk=id)
            serializer = ReviewSerializer(review)
            return JsonResponse(serializer.data, safe=False)
        except ObjectDoesNotExist:
            return JsonResponse({'error': 'no such Review'}, status=400)
    else:
        return JsonResponse({'error': 'Method Not Allowed'}, status=405)

@csrf_exempt
def allreview(request, id=0):
    if request.method == 'GET':
        try:
            reviews = Review.objects.filter(book=id)
            serializer = ReviewSerializer(reviews, many=True)
            return JsonResponse(serializer.data, safe=False)
        except ObjectDoesNotExist:
            return JsonResponse({'error': 'no such Book'}, status=400)  
    else:
        return JsonResponse({'error': 'Method Not Allowed'}, status=405)


@csrf_exempt
def allreview_noid(request):
    return JsonResponse({'error': 'Provide a Correct Book id'}, status=400)


@csrf_exempt
@permission_classes([IsAuthenticated])
def addreview(request, id=None):
    if request.method == 'POST':
        jwt = JWTAuthentication()
        try:
            user, _ = jwt.authenticate(request)
        except Exception:
            return JsonResponse({'error': 'You need to Login'}, status=401)
        if request.content_type == 'application/json':
            mandatory_keys = ['title', 'media', 'content', 'rating']
            missing_keys = []
            if id is not None:
                temp = json.loads(request.body)
                missing_keys = [key for key in mandatory_keys if key not in temp]
                if missing_keys:
                    return JsonResponse({'error': f'Missing Key(s): {", ".join(missing_keys)}'}, status=400)
                book = Book.objects.get(pk=id)
                book_name = book.name
                new_review = Review.objects.create(
                    owner=user,
                    title=temp['title'],
                    book=book,
                    media=temp['media'],
                    content=temp['content'],
                    rating=temp['rating']
                    )
                serialize = ReviewSerializer(new_review)
                response_data = serialize.data
                response_data['book_title'] = book_name
                response_data['reviewer'] = user.username
                return JsonResponse(response_data, safe=False, status=201)    
            else:
                return JsonResponse({'error': 'No Book to review'})
        else:
            return JsonResponse({'error': 'Content type is Not Json'}, status=400)
    else:
        return JsonResponse({'error': 'Method Not Allowed'}, status=405)


@csrf_exempt
@permission_classes([IsAuthenticated])
def deletereview(request, id=0):
    if request.method == 'DELETE':
        jwt = JWTAuthentication()
        try:
            user, _ = jwt.authenticate(request)
        except Exception:
            return JsonResponse({'error': 'You need to Login'}, status=401)
        try:
            review_id = int(id)
            try:
                review = Review.objects.get(pk=review_id)
                if user == review.owner:
                    review.delete()
                    return JsonResponse({'message': 'Review Deleted!'}, status=200)
                else:
                    return JsonResponse({'error': 'Unauthorized'}, status=403)
            except ObjectDoesNotExist:
                return JsonResponse({'error': 'No such Object'}, status=400)
        except ValueError:
            return JsonResponse({'error': 'ID is not an integer'}, status=400) 
    else:
        return JsonResponse({'error': 'Method Not Allowed'}, status=405)