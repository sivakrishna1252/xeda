"""
URL configuration for xeda project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include, re_path
from django.http import JsonResponse, HttpResponse
from rest_framework import routers
from xeda_backend import views
from django.conf import settings
from pathlib import Path


router = routers.DefaultRouter()
router.register(r'contacts', views.ContactViewSet)

def home(request):
    return JsonResponse({"message": "Hello, This is Xeda website"})

def serve_frontend(request, path=''):
    """Serve the Vite-built index.html file for all non-API/admin routes"""
    frontend_build_path = Path(settings.BASE_DIR) / "frontend_build" / "index.html"
    if frontend_build_path.exists():
        with open(frontend_build_path, 'r', encoding='utf-8') as f:
            return HttpResponse(f.read(), content_type='text/html')
    return HttpResponse("Frontend build not found. Please build the frontend first.", status=404)

def serve_frontend_assets(request, path):
    """Serve frontend assets (JS, CSS, images) from frontend_build directory"""
    frontend_build_dir = Path(settings.BASE_DIR) / "frontend_build"
    # Path from URL pattern is just the filename, need to add 'assets/' prefix
    file_path = frontend_build_dir / "assets" / path
    
    # Security: Ensure the resolved path is within frontend_build_dir
    try:
        file_path = file_path.resolve()
        frontend_build_dir = frontend_build_dir.resolve()
        if not str(file_path).startswith(str(frontend_build_dir)):
            return HttpResponse("Invalid path", status=403)
    except (OSError, ValueError):
        return HttpResponse("Invalid path", status=403)
    
    if file_path.exists() and file_path.is_file():
        # Determine content type
        content_type = 'application/octet-stream'
        if path.endswith('.js'):
            content_type = 'application/javascript; charset=utf-8'
        elif path.endswith('.css'):
            content_type = 'text/css; charset=utf-8'
        elif path.endswith('.png'):
            content_type = 'image/png'
        elif path.endswith('.jpg') or path.endswith('.jpeg'):
            content_type = 'image/jpeg'
        elif path.endswith('.webp'):
            content_type = 'image/webp'
        elif path.endswith('.svg'):
            content_type = 'image/svg+xml'
        elif path.endswith('.woff'):
            content_type = 'font/woff'
        elif path.endswith('.woff2'):
            content_type = 'font/woff2'
        elif path.endswith('.ttf'):
            content_type = 'font/ttf'
        
        try:
            with open(file_path, 'rb') as f:
                response = HttpResponse(f.read(), content_type=content_type)
                # Add cache headers for production
                response['Cache-Control'] = 'public, max-age=31536000'
                return response
        except IOError:
            return HttpResponse("Error reading file", status=500)
    
    return HttpResponse(f"Asset not found: {path}", status=404)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('api/hello', home, name="home"),  # API endpoint for testing
    # Serve frontend assets (JS, CSS, images from Vite build)
    # WhiteNoise handles /static/ automatically, but we need to serve /assets/ from frontend_build
    re_path(r'^assets/(?P<path>.*)$', serve_frontend_assets),
    # Catch-all for frontend routes (React Router) - must be last
    # WhiteNoise middleware handles /static/ URLs automatically
    re_path(r'^(?!admin|api|static|assets).*$', serve_frontend, name="frontend"),
]
