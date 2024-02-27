from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.http.response import JsonResponse
from django.core.exceptions import ObjectDoesNotExist
from vote.models import Vote
from vote.serializer import VoteSerializer
from review.models import Review
from comment.models import Comment
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.decorators import permission_classes
from rest_framework.permissions import IsAuthenticated
from django.contrib.contenttypes.models import ContentType


@csrf_exempt
@permission_classes([IsAuthenticated])
def like_view(request, content_type, pk):
    if request.method == 'PATCH':
        jwt = JWTAuthentication()
        try:
            user, _ = jwt.authenticate(request)
        except Exception:
            return JsonResponse({'error': 'You need to log in'}, status=401)

        try:
            if content_type == 'review':
                instance = Review.objects.get(pk=pk)
            elif content_type == 'comment':
                instance = Comment.objects.get(pk=pk)
            else:
                return JsonResponse({'error': 'Invalid Object'}, status=400)
        except ObjectDoesNotExist:
            return JsonResponse({'error': 'Object Not Found'}, status=404)

        existing_vote = Vote.objects.filter(user_id=user, content_type=ContentType.objects.get_for_model(instance), object_id=instance.pk).first()
        if existing_vote:
            existing_vote.delete()
            return JsonResponse({'message': 'Vote reverted!'})

        vote = Vote.objects.create(
            vote_type='UP',
            user_id=user,
            content_type=ContentType.objects.get_for_model(instance),
            object_id=instance.pk
        )
        serialize = VoteSerializer(vote)
        return JsonResponse({'message': 'Vote updated successfully', 'data': serialize.data}, status=201)
    else:
        return JsonResponse({'error': 'Method Not Allowed'}, status=405)


@csrf_exempt
@permission_classes([IsAuthenticated])
def dislike_view(request, content_type, pk):
    if request.method == 'PATCH':
        jwt = JWTAuthentication()
        try:
            user, _ = jwt.authenticate(request)
        except Exception:
            return JsonResponse({'error': 'You need to log in'}, status=401)

        try:
            if content_type == 'review':
                instance = Review.objects.get(pk=pk)
            elif content_type == 'comment':
                instance = Comment.objects.get(pk=pk)
            else:
                return JsonResponse({'error': 'Invalid Object'}, status=400)
        except ObjectDoesNotExist:
            return JsonResponse({'error': 'Object Not Found'}, status=404)

        existing_vote = Vote.objects.filter(user_id=user, content_type=ContentType.objects.get_for_model(instance), object_id=instance.pk).first()
        if existing_vote:
            existing_vote.delete()
            return JsonResponse({'message': 'Vote reverted!'})

        vote = Vote.objects.create(
            vote_type='DOWN',
            user_id=user,
            content_type=ContentType.objects.get_for_model(instance),
            object_id=instance.pk
        )
        serialize = VoteSerializer(vote)
        return JsonResponse({'message': 'Vote updated successfully', 'data': serialize.data}, status=201)
    else:
        return JsonResponse({'error': 'Method Not Allowed'}, status=405)