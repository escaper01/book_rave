from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt, csrf_protect
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from django.core.exceptions import ObjectDoesNotExist
from .models import Review
from user.models import User
from .serializers import ReviewSerializer
import json
from json.decoder import JSONDecodeError


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
