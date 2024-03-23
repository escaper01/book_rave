from rest_framework.response import Response
from rest_framework import status
from .models import Book
from .serializers import BookSerializer, MinimalisticBookSerializer, StatisticsBookSerializer
from rest_framework.decorators import permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view
from rest_framework.pagination import PageNumberPagination
from user.models import Person


@api_view(['GET'])
def all_books(request):
    paginator = PageNumberPagination()
    paginator.page_size = 18
    books = Book.objects.all().order_by('-created_at')
    context = paginator.paginate_queryset(books, request)
    serializer = MinimalisticBookSerializer(context, many=True, context={'request': request})
    return paginator.get_paginated_response(serializer.data)


@api_view(['GET'])
def get_book(request, book_id):
    try:
        book = Book.objects.get(id=book_id)
        serializer = BookSerializer(book,context={'request': request})
        return Response(serializer.data, status=status.HTTP_200_OK)

    except Book.DoesNotExist:
        return Response({'message': 'Book was not found'}, status=status.HTTP_404_NOT_FOUND)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def add_book(request):
    serializer = BookSerializer(data=request.data, context={'request': request})
    if serializer.is_valid():
        current_person = Person.objects.get(user=request.user)
        serializer.save(added_by=current_person)
    else:
        print(serializer.errors)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def update_book(request, book_id):
    try:
        current_user = Person.objects.get(user=request.user)
        book = Book.objects.get(id=book_id, added_by=current_user)
    except Book.DoesNotExist:
        return Response({'message': 'no such book'}, status=status.HTTP_400_BAD_REQUEST)

    serializer = BookSerializer(instance=book, data=request.data, context={'request': request}, partial=True)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def delete_book(request, book_id):
    try:
        current_user = Person.objects.get(user=request.user)
        book = Book.objects.get(id=book_id, added_by=current_user)
        book.delete()

    except Book.DoesNotExist:
        return Response({'message': 'no such book'}, status=status.HTTP_400_BAD_REQUEST)
    return Response({'success': True}, status=status.HTTP_200_OK)


@api_view(['POST'])
def search(request):
    query = request.data['query']
    try:
        books = Book.objects.filter(name__contains=query)
    except Book.DoesNotExist:
        return Response([], status=status.HTTP_200_OK)
    paginator = PageNumberPagination()
    paginator.page_size = 18
    context = paginator.paginate_queryset(books, request)
    serializer = MinimalisticBookSerializer(context, many=True, context={'request': request})
    return paginator.get_paginated_response(serializer.data)
    # return Response(serialize.data, status=status.HTTP_200_OK)


@api_view(['GET'])
def get_books_bundle(request, category):
    print(category)
    if category:
        books_by_category =  Book.objects.filter(category=category)[:10]
        serializer = MinimalisticBookSerializer(books_by_category, many=True, context={'request': request})
        return Response(serializer.data, status=status.HTTP_200_OK)
    return Response([], status=status.HTTP_200_OK)



@api_view(['GET'])
def get_book_statistics(request, book_id):
    try:
        book = Book.objects.get(id=book_id)
    except Book.DoesNotExist:
        return Response({"message": "book does't exists"}, status=status.HTTP_404_NOT_FOUND)
    serializer = StatisticsBookSerializer(book, many=False, context={'request': request})
    return Response(serializer.data, status=status.HTTP_200_OK)