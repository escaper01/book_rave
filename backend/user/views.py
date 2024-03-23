from rest_framework.decorators import api_view
from rest_framework.permissions import IsAuthenticated
from django.core.exceptions import ObjectDoesNotExist
from rest_framework.response import Response
from rest_framework import status
from .models import Person
from rest_framework.decorators import permission_classes
from rest_framework.permissions import IsAuthenticated
from .serializers import PersonSerializer

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_profile_info(request):
    try:
        current_person = Person.objects.get(user=request.user)
    except Person.ObjectDoesNotExist:
        return Response({'message': 'no such user'}, status=status.HTTP_404_NOT_FOUND)

    serializer = PersonSerializer(current_person)

    profile_pic = request.build_absolute_uri(serializer.data['avatar']) if serializer.data['avatar'] else None
    response_data = {
        'username': current_person.user.username,
        'first_name': request.user.first_name,
        'last_name': request.user.last_name,
        'avatar': profile_pic,
        'city': serializer.data['city'],
    }

    return Response(response_data, status=status.HTTP_200_OK)


@api_view(['PATCH'])
@permission_classes([IsAuthenticated])
def update_profile_info(request):
        try:
            current_person = Person.objects.get(user=request.user)
        except Person.DoesNotExist:
            return Response({'message': 'no such user'}, status=status.HTTP_404_NOT_FOUND)

        print(request.data)
        serializer = PersonSerializer(current_person, data=request.data, partial=True, context={'request': request})
        if serializer.is_valid():
            first_name = request.data.get('first_name')
            last_name = request.data.get('last_name')

            if first_name:
                request.user.first_name = first_name
            if last_name:
                request.user.last_name = last_name
            request.user.save()
            serializer.save()

            res_data = serializer.data
            res_data['first_name'] = request.user.first_name
            res_data['last_name'] = request.user.last_name
            del res_data['user']

            return Response(res_data, status=status.HTTP_200_OK)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def is_authenticated(request):
    if request.user.is_authenticated:
        return Response({'message': 'user is authenticated'}, status=status.HTTP_200_OK)
    return Response({message: 'user is not authenticated'}, status=status.HTTP_401_UNAUTHORIZED)