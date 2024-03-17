from .models import Review
from user.models import Person
from book.models import Book
from .serializers import ReviewSerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import permission_classes, api_view
from rest_framework.permissions import IsAuthenticated
from rest_framework.pagination import PageNumberPagination


@api_view(['GET'])
def get_review(request, review_id):
    try:
        review = Review.objects.get(pk=review_id)
        serializer = ReviewSerializerCover(review, context={"request": request})
        return Response(serializer.data, status=status.HTTP_200_OK) 
    except Review.DoesNotExist:
        return Response ({'error': 'Review was not found'}, status=status.HTTP_404_NOT_FOUND)

@api_view(['GET'])
def all_reviews(request):
    paginator = PageNumberPagination()
    paginator.page_size = 5
    try:
        reviews = Review.objects.all().order_by('-created_at')
        context = paginator.paginate_queryset(reviews, request)
        serializer = ReviewSerializer(context, many=True, context={"request": request})
        return paginator.get_paginated_response(serializer.data)
    except Book.DoesNotExist:
        return Response({'error': 'no such Book'}, status=status.HTTP_404_NOT_FOUND)

@api_view(['GET'])
def all_reviews_about_a_book(request, book_id):
    paginator = PageNumberPagination()
    paginator.page_size = 5
    try:
        reviews = Review.objects.filter(book=book_id).order_by('-created_at')
        context = paginator.paginate_queryset(reviews, request)
        serializer = ReviewSerializer(context, many=True,context={"request": request})
        return paginator.get_paginated_response(serializer.data)
    except Book.DoesNotExist:
        return Response({'error': 'no such Book'}, status=status.HTTP_404_NOT_FOUND)  

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def add_review(request, book_id):
    try:
        book = Book.objects.get(pk=book_id)
    except Book.DoesNotExist:
        return Response({'error': 'no book to review'}, status=status.HTTP_404_NOT_FOUND)
    data = request.data.copy()
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