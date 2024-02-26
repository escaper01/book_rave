from django.shortcuts import render

# Create your views here.


def like_view(request, pk):
    vote = get_object_or_404(Vote, pk=pk)
    vote.vote_type = 'UP'
    vote.save()
    return JsonResponse({'message': 'Vote updated successfully'})

def dislike_view(request, pk):
    vote = get_object_or_404(Vote, pk=pk)
    vote.vote_type = 'DOWN'
    vote.save()
    return JsonResponse({'message': 'Vote updated successfully'})