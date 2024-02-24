from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from django.core.exceptions import ObjectDoesNotExist
from .models import Book
from .serializers import BookSerializer


@csrf_exempt
def allbooks(request):
    if request.method == 'GET':
        books = Book.objects.all()
        serializer = BookSerializer(books, many=True)
        return JsonResponse(serializer.data, safe=False)
    else:
        return JsonResponse({'error': 'Method Not allowed'}, status=405)
    

@csrf_exempt
def onebook(request, id=0):
    if request.method == 'GET':
        try:
            book = Book.objects.get(pk=id)
            serializer = BookSerializer(book)
            return JsonResponse(serializer.data, safe=False)
        except ObjectDoesNotExist:
            return JsonResponse({'error': 'Not Book Here'})
    else:
        return JsonResponse({'error': 'Method Not allowed'}, status=405)