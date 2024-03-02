from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.http.response import JsonResponse
from django.core.exceptions import ObjectDoesNotExist
from .models import Book
from favorite.models import Favorite
from .serializer import FavoriteSerializer
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.decorators import permission_classes
from rest_framework.permissions import IsAuthenticated



@csrf_exempt
@permission_classes([IsAuthenticated])
def addfavorite(request, id=None):
    if request.method == 'PATCH':
        book_lists = []
        jwt  = JWTAuthentication()
        try:
            user, _ = jwt.authenticate(request)
        except Exception:
            return JsonResponse({'error': 'You need to Login'}, status=401)
        if id is not None:
            try:
                book = Book.objects.get(pk=id)

                existing = Favorite.objects.filter(book_id=book, user_id=user)
                if existing:
                    existing.delete()
                    return JsonResponse({'message': 'Bookmark remove!'}, status=200)
                favorite = Favorite.objects.create(
                    book_id=book,
                    user_id=user,
                )
                serializer = FavoriteSerializer(favorite)
                response_data = serializer.data
                response_data['username'] = user.username
                response_data['bookname'] = book.name
                return JsonResponse(response_data, status=201)
            except ObjectDoesNotExist:
                return JsonResponse({'error': 'No such id to bookmark'}, status=404)
        else:
            return JsonResponse({'error': 'id is missing or not integer'}, status=400)
    else:
        return JsonResponse({'error': 'Method Not Allowed'}, status=405)