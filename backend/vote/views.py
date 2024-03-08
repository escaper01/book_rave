from django.core.exceptions import ObjectDoesNotExist
from vote.models import Vote
from vote.serializer import VoteSerializer
from review.models import Review
from comment.models import Comment
from rest_framework import status
from rest_framework.response import Response
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.decorators import permission_classes, api_view
from rest_framework.permissions import IsAuthenticated
from django.contrib.contenttypes.models import ContentType


@api_view(['PATCH'])
@permission_classes([IsAuthenticated])
def like_view(request, content_type, pk):
    try:
        if content_type == 'review':
            instance = Review.objects.get(pk=pk)
        elif content_type == 'comment':
            instance = Comment.objects.get(pk=pk)
        else:
            return Response({'error': 'Invalid Object'}, status=status.HTTP_400_BAD_REQUEST)
    except ObjectDoesNotExist:
        return Response({'error': 'Object Not Found'}, status=status.HTTP_404_NOT_FOUND)

    existing_vote = Vote.objects.filter(user_id=request.user.id, content_type=ContentType.objects.get_for_model(instance), object_id=instance.pk).first()
    if existing_vote:
        existing_vote.delete()
        return Response({'message': 'Vote reverted!'})

    vote = Vote.objects.create(
        vote_type='UP',
        user_id=request.user.id,
        content_type=ContentType.objects.get_for_model(instance),
        object_id=instance.pk
        )
    serialize = VoteSerializer(vote)
    return Response({'message': 'Vote updated successfully', 'data': serialize.data}, status=status.HTTP_201_CREATED)



@api_view(['PATCH'])
@permission_classes([IsAuthenticated])
def dislike_view(request, content_type, pk):
    try:
        if content_type == 'review':
            instance = Review.objects.get(pk=pk)
        elif content_type == 'comment':
            instance = Comment.objects.get(pk=pk)
        else:
            return Response({'error': 'Invalid Object'}, status=status.HTTP_400_BAD_REQUEST)
    except ObjectDoesNotExist:
        return Response({'error': 'Object Not Found'}, status=status.HTTP_404_NOT_FOUND)

    existing_vote = Vote.objects.filter(user_id=request.user.id, content_type=ContentType.objects.get_for_model(instance), object_id=instance.pk).first()
    if existing_vote:
        existing_vote.delete()
        return Response({'message': 'Vote reverted!'}, status=status.HTTP_200_OK)

    vote = Vote.objects.create(
        vote_type='DOWN',
        user_id=request.user.id,
        content_type=ContentType.objects.get_for_model(instance),
        object_id=instance.pk
        )
    serialize = VoteSerializer(vote)
    return Response({'message': 'Vote updated successfully', 'data': serialize.data}, status=status.HTTP_201_CREATED)