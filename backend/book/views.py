from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt, csrf_protect
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from django.core.exceptions import ObjectDoesNotExist
from .models import Book
from user.models import User
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
            try:
                temp = json.loads(request.body)
                mandatory_keys = ['name', 'description', 'author', 'publication_date', 'added_by']
                missing_keys = [key for key in mandatory_keys if key not in temp]
                if missing_keys:
                    return JsonResponse({'error': f'Missing Key(s): {", ".join(missing_keys)}'}, status=400)
                
                added_by_user_id = temp.get('added_by')
                added_by_user = User.objects.get(pk=added_by_user_id)
                
                new_book = Book.objects.create(
                    name=temp['name'],
                    description=temp['description'],
                    author=temp['author'],
                    publication_date=temp['publication_date'],
                    added_by=added_by_user
                )
                
                serializer = BookSerializer(new_book)
                return JsonResponse(serializer.data, status=201)
            except JSONDecodeError:
                return JsonResponse({'error': 'Content type is not JSON'}, status=400)
    else:
        return JsonResponse({'error': 'Method Not Allowed'}, status=405)



@csrf_exempt
def updatebook(request):
    if request.method == 'PUT':
        if request.content_type == 'application/json':
            request_body = json.loads(request.body)
            book_id = request_body.get('id')
            try:
               book = Book.objects.get(id=book_id)
               new_desc = request_body.get('description')
               if new_desc is not None:
                   setattr(book, 'description', new_desc)
                   book.save()
                   return JsonResponse({'message': 'book description updated!'}, status=200)
            except ObjectDoesNotExist:
                return JsonResponse({'error': 'No such Object'}, status=400)
        else:
            return JsonResponse({'error': 'Content type is not JSON'}, status=400)
    else:
        return JsonResponse({'error': 'Method Not Allowed'}, status=405)

@csrf_exempt
def deletebook(request, id=0):
    if request.method == 'DELETE':
        try:
            book_id = int(id)
            try:
                book = Book.objects.get(pk=book_id)
                book.delete()
                return JsonResponse({'message': 'Book Deleted!'}, status=200)
            except ObjectDoesNotExist:
                return JsonResponse({'error': 'No such Object'}, status=400)
        except ValueError:
            return JsonResponse({'error': 'ID is not an integer'}, status=400) 
    else:
        return JsonResponse({'error': 'Method Not Allowed'}, status=405)


@csrf_exempt
def deletebook_noid(request):
    return JsonResponse({'error': 'No ID'}, status=400)
