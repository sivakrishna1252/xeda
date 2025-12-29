from django.utils.deprecation import MiddlewareMixin
from django.middleware.csrf import CsrfViewMiddleware


class CsrfExemptApiMiddleware(CsrfViewMiddleware):
    """
    Middleware to exempt API routes from CSRF protection.
    API endpoints don't need CSRF protection as they use token/session auth or are public.
    """
    
    def process_request(self, request):
        # Exempt all /api/ routes from CSRF protection
        if request.path.startswith('/api/'):
            setattr(request, '_dont_enforce_csrf_checks', True)
        return super().process_request(request)

