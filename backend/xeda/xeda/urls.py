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
from django.urls import path, include
from django.http import JsonResponse, HttpResponse
from rest_framework import routers
from xeda_backend import views
from django.conf import settings
from pathlib import Path


router = routers.DefaultRouter()
router.register(r'contacts', views.ContactViewSet)

def home(request):
    return JsonResponse({"message": "Hello, This is Xeda website"})

def serve_frontend(request):
    """Serve the Vite-built index.html file"""
    frontend_build_path = Path(settings.BASE_DIR) / "frontend_build" / "index.html"
    if frontend_build_path.exists():
        with open(frontend_build_path, 'r', encoding='utf-8') as f:
            return HttpResponse(f.read(), content_type='text/html')
    return HttpResponse("Frontend build not found", status=404)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('api/hello', home, name="home"),  # API endpoint for testing
    path("", serve_frontend, name="frontend"),  # Serve React app at root
]
