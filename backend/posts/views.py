from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from .models import Post
import json

def post_list(request):
    posts = Post.objects.all()
    data = [{
        'id': post.id,
        'title': post.title,
        'content': post.content,
        'created_at': post.created_at.isoformat()
    } for post in posts]
    return JsonResponse(data, safe=False)

def index(request):
    return HttpResponse("Hello, world. You're at the posts index.")


@csrf_exempt
def update_post(request, pk):
    data = json.loads(request.body)
    if request.method == 'PUT':
        try:
            post = Post.objects.get(pk=pk)
            post.title = data['title']
            post.content = data['content']
            post.save()
            return JsonResponse({'status': 'success', 'message': 'post updated successfully'})
        except Post.DoesNotExist:
            return JsonResponse({'status': 'error', 'message': 'post not found'}, status=404)
    else:
        return JsonResponse({'status': 'error', 'message': 'Invalid request method'}, status=405)

