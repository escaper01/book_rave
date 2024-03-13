from .models import Review
from user.models import Person
from book.models import Book
from .serializers import ReviewSerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import permission_classes, api_view
from rest_framework.permissions import IsAuthenticated


@api_view(['GET'])
def get_review(request, review_id):
    try:
        review = Review.objects.get(pk=review_id)
        serializer = ReviewSerializer(review)
        return Response(serializer.data, status=status.HTTP_200_OK) 
    except Review.DoesNotExist:
        return Response ({'error': 'Review was not found'}, status=status.HTTP_404_NOT_FOUND)

@api_view(['GET'])
def all_review(request, book_id):
    try:
        reviews = Review.objects.filter(book=book_id)
        serializer = ReviewSerializer(reviews, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    except Book.DoesNotExist:
        return Response({'error': 'no such Book'}, status=status.HTTP_404_NOT_FOUND)  

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def add_review(request, book_id):
    try:
        book = Book.objects.get(pk=book_id)
    except Book.DoesNotExist:
        return Response({'error': 'no book to review'}, status=status.HTTP_404_NOT_FOUND)
    data = request.data
    data['book'] = book.id
    serializer = ReviewSerializer(data=data, context={'request': request})
    if serializer.is_valid():
        serializer.save(book=book, owner=request.user)
        return Response(serializer.data, status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def delete_review(request, review_id):
    try:
        review = Review.objects.get(pk=review_id, owner=request.user)
        review.delete()
        return Response({'success': True}, status=status.HTTP_200_OK)
    except Review.DoesNotExist:
        return Response({'error': 'Review not found'}, status=status.HTTP_404_NOT_FOUND)