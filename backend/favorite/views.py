from rest_framework.response import Response
from .models import Book
from favorite.models import Favorite
from .serializer import FavoriteSerializer
from rest_framework import status
from rest_framework.decorators import permission_classes, api_view
from rest_framework.permissions import IsAuthenticated



@api_view(['PATCH'])
@permission_classes([IsAuthenticated])
def add_favorite(request, book_id):
    try:
        book = Book.objects.get(pk=book_id)
        existing = Favorite.objects.filter(book_id=book, user_id=request.user.id)
        if existing:
            existing.delete()
            return Response({'message': 'Bookmark remove!'}, status=status.HTTP_200_OK)
        favorite = Favorite.objects.create(
            book_id=book,
            user_id=request.user.id,
            )
        serializer = FavoriteSerializer(favorite)
        response_data = serializer.data
        response_data['username'] = request.user.username
        response_data['bookname'] = book.name
        return Response(response_data, status=status.HTTP_200_OK)
    except Book.DoesNotExist:
        return Response({'error': 'No such id to bookmark'}, status=status.HTTP_404_NOT_FOUND)