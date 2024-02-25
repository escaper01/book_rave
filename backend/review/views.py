from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt, csrf_protect
from django.http.response import JsonResponse
from django.core.exceptions import ObjectDoesNotExist
from .models import Review
from user.models import User
from book.models import Book
from .serializers import ReviewSerializer
import json


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
def addreview(request, id=None):
    if request.method == 'POST':
        if request.content_type == 'application/json':
            mandatory_keys = ['id', 'title', 'media', 'content', 'rating']
            missing_keys = []
            if id is not None:
                temp = json.loads(request.body)
                missing_keys = [key for key in mandatory_keys if key not in temp]
                if missing_keys:
                    return JsonResponse({'error': f'Missing Key(s): {", ".join(missing_keys)}'}, status=400)
                owner_id = temp.get('id')
                reviewer = User.objects.get(pk=owner_id)
                book = Book.objects.get(pk=id)
                book_name = book.name
                new_review = Review.objects.create(
                    owner=reviewer,
                    title=temp['title'],
                    book=book,
                    media=temp['media'],
                    content=temp['content'],
                    rating=temp['rating']
                    )
                serialize = ReviewSerializer(new_review)
                response_data = serialize.data
                response_data['book_title'] = book_name
                return JsonResponse(response_data, safe=False, status=201)    
            else:
                return JsonResponse({'error': 'No Book to review'})
        else:
            return JsonResponse({'error': 'Content type is Not Json'}, status=400)
    else:
        return JsonResponse({'error': 'Method Not Allowed'}, status=405)


@csrf_exempt
def deletereview(request, id=0):
    if request.method == 'DELETE':
        try:
            review_id = int(id)
            try:
                review = Review.objects.get(pk=review_id)
                review.delete()
                return JsonResponse({'message': 'Review Deleted!'}, status=200)
            except ObjectDoesNotExist:
                return JsonResponse({'error': 'No such Object'}, status=400)
        except ValueError:
            return JsonResponse({'error': 'ID is not an integer'}, status=400) 
    else:
        return JsonResponse({'error': 'Method Not Allowed'}, status=405)