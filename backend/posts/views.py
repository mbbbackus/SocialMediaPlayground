from django.shortcuts import render
from django.http import HttpResponse

from django.http import JsonResponse
from .models import Post

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

