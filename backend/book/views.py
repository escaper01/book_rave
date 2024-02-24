from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt, csrf_protect
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from django.core.exceptions import ObjectDoesNotExist
from .models import Book
from .serializers import BookSerializer
import json
from json.decoder import JSONDecodeError


@csrf_exempt
def allbooks(request):
    if request.method == 'GET':
        books = Book.objects.all()
        serializer = BookSerializer(books, many=True)
        return JsonResponse(serializer.data, safe=False)
    else:
        return JsonResponse({'error': 'Method Not allowed'}, status=405)
    
@csrf_exempt
def onebook_noid(request):
    return JsonResponse({'error': 'No ID'}, status=400)


@csrf_exempt
def onebook(request, id=0):
    if request.method == 'GET':
        try:
            book_id = int(id)
            try:
                book = Book.objects.get(pk=book_id)
                serializer = BookSerializer(book)
                return JsonResponse(serializer.data, safe=False)
            except ObjectDoesNotExist:
                return JsonResponse({'error': 'Not Book Here'})
        except ValueError:
            return JsonResponse({'error': 'Book ID is not an integer'}, status=400)     
    else:
        return JsonResponse({'error': 'Method Not allowed'}, status=405)
    
# csrf exempt for DEV Only
@csrf_exempt
def addbook(request):
    if request.method == 'POST':
        if request.content_type == 'application/json':
            temp = json.loads(request.body)
            mandatory_keys = ['name', 'description', 'author', 'publication_date']
            missing_key = []
            for key in mandatory_keys:
                if key not in temp:
                    missing_key.append(key)
                if missing_key:
                    return JsonResponse({'error': f'Missing Key(s): {", ".join(missing_key) }'}, status=400) 
            try:     
                new_book = Book(**temp)
                new_book.save()
                serializer = BookSerializer(new_book)
                return JsonResponse(serializer.data, safe=False, status=201)
            except JSONDecodeError:
                return JsonResponse({'error': 'Content type is not JSON'}, status=400)
    else:
        return JsonResponse({'error': 'Method Not allowed'}, status=405)
    
@csrf_exempt
def updatebook(request, id=0):
    pass

@csrf_exempt
def deletebook(request, id=0):
    pass

@csrf_exempt
def deletebook_noid(request):
    return JsonResponse({'error': 'No ID'}, status=400)