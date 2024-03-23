from rest_framework.response import Response
from .models import Book
from favorite.models import Favorite
from .serializer import FavoriteSerializer
from rest_framework import status
from rest_framework.decorators import permission_classes, api_view
from rest_framework.permissions import IsAuthenticated
from rest_framework.pagination import PageNumberPagination


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def favorite_list(request):
    try:
        paginator = PageNumberPagination()
        paginator.page_size = 3
        favorite_books = Favorite.objects.filter(user_id=request.user)
        context = paginator.paginate_queryset(favorite_books, request)
        serializer = FavoriteSerializer(context, many=True, context={'request': request})
        return paginator.get_paginated_response(serializer.data)
    except Favorite.DoesNotExist:
        return Response({'message': 'Favorite does not'})



@api_view(['POST'])
@permission_classes([IsAuthenticated])
def add_favorite(request, book_id):
    try:
        book = Book.objects.get(pk=book_id)
        existing = Favorite.objects.filter(book_id=book, user_id=request.user)
        if existing:
            existing.delete()
            remained_favorite = Favorite.objects.filter(user_id=request.user).all()
            serializer = FavoriteSerializer(remained_favorite, many=True, context={'request': request})
            return Response({'message': 'book removed from your fav list'}, status=status.HTTP_200_OK)
        favorite = Favorite.objects.create(
            book_id=book,
            user_id=request.user,
            )
        serializer = FavoriteSerializer(favorite, context={'request': request})
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    except Book.DoesNotExist:
        return Response({'error': 'No such book to bookmark'}, status=status.HTTP_404_NOT_FOUND)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def book_mark_checker(request, book_id):
    book = Favorite.objects.filter(book_id=book_id, user_id=request.user)
    if book.exists():
        return Response({'message': 'it is already marked as favorite'}, status=status.HTTP_200_OK)
    return Response({'message': 'not marked as favorite'}, status=status.HTTP_404_NOT_FOUND)