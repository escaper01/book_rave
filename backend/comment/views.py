from rest_framework.response import Response
from django.core.exceptions import ObjectDoesNotExist
from .models import Comment
from rest_framework import status
from review.models import Review
from user.models import Person
from .serializers import CommentSerializer
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.decorators import permission_classes, api_view
from rest_framework.permissions import IsAuthenticated
from vote.models import Vote
from django.contrib.contenttypes.models import ContentType

@api_view(['GET'])
def all_comments(request, review_id):
    try:
        comments = Comment.objects.filter(review_id=review_id)
        serialize = CommentSerializer(comments, many=True)
        return Response(serialize.data, status=status.HTTP_200_OK)
    except Comment.DoesNotExist:
        return Response(serialize.errors, status=status.HTTP_404_NOT_FOUND)


@api_view(['GET'])
def get_comment(request, comment_id):
    try:
        comment = Comment.objects.get(pk=comment_id)
        serializer = CommentSerializer(comment)
        content_type = ContentType.objects.get_for_model(comment)
        votes = Vote.objects.filter(content_type=content_type, object_id=comment_id)
        upvotes = votes.filter(vote_type='UP').count()
        downvotes = votes.filter(vote_type='DOWN').count()
        comment_data = serializer.data
        comment_data['upvotes'] = upvotes
        comment_data['downvotes'] = downvotes
        return Response(comment_data, status=status.HTTP_200_OK)
    except Comment.DoesNotExist:
        return Response({'error': 'No such comment'}, status=status.HTTP_404_NOT_FOUND)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def add_comment(request, review_id):
    try:
        review = Review.objects.get(pk=review_id)
    except Review.DoesNotExist:
        return Response({'error':'no such review'}, status=status.HTTP_404_NOT_FOUND)
    data = request.data
    data['review_id'] = review.id
    data['user'] = request.user.id
    serializer = CommentSerializer(data=data, context={'request': request})
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def update_comment(request, comment_id):       
    try:
        comment = Comment.objects.get(id=comment_id)
        if request.user.id == comment.user.id:
            serializer = CommentSerializer(comment, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response({'message': 'comment content updated!'}, status=status.HTTP_200_OK)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response({'error': 'Unauthorized'}, status=status.HTTP_401_UNAUTHORIZED)
    except Comment.DoesNotExist:
        return Response({'error': 'No such Object'}, status=status.HTTP_404_NOT_FOUND)
    


@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def remove_comment(request, comment_id):
    try:
        comment = Comment.objects.get(pk=comment_id)
        if request.user.id == comment.user.id:
            comment.delete()
            return Response({'success': True}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'Unauthorized'}, status=status.HTTP_401_UNAUTHORIZED)
    except Comment.DoesNotExist:
        return Response({'error': 'no such comment'}, status=status.HTTP_404_NOT_FOUND)