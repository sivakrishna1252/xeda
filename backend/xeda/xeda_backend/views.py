from django.core.mail import send_mail
from django.conf import settings
from rest_framework import mixins, status, viewsets
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from .models import Contact
from .serializers import ContactSerializer


class ContactViewSet(mixins.CreateModelMixin, viewsets.GenericViewSet):
    """
    Public API for purchase enquiries — POST only.
    View submissions in Django admin (/admin/), not via this endpoint.
    """
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
    permission_classes = [AllowAny]

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            # Save the enquiry
            contact = serializer.save()
            
            # Send email notification to admin (optional - don't fail if email not configured)
            try:
                # Only send email if settings are configured
                if hasattr(settings, 'DEFAULT_FROM_EMAIL') and hasattr(settings, 'ADMIN_EMAIL'):
                    if settings.DEFAULT_FROM_EMAIL and settings.ADMIN_EMAIL:
                        subject = f'New Purchase Enquiry from {contact.name}'
                        message = f"""
New Purchase Enquiry Received!

Customer Details:
-----------------
Name: {contact.name}
Email: {contact.email or 'Not provided'}
Phone: {contact.phone}
Product: {contact.select_product or 'Not specified'}
Quantity: {contact.quality or 'Not specified'}
City/Pin Code: {contact.city_pincode or 'Not provided'}

Submitted at: {contact.created_at.strftime('%d-%m-%Y %H:%M:%S')}

---
This is an automated email from Xeda Purchase Enquiry System.
                        """
                        
                        send_mail(
                            subject=subject,
                            message=message,
                            from_email=settings.DEFAULT_FROM_EMAIL,
                            recipient_list=[settings.ADMIN_EMAIL],
                            fail_silently=True,  # Don't fail the request if email fails
                        )
            except Exception as e:
                # Log the error but don't fail the request
                print(f"Email notification skipped (not configured): {str(e)}")
            
            return Response(
                {
                    'success': True,
                    'message': 'Enquiry submitted successfully!',
                },
                status=status.HTTP_201_CREATED
            )
        return Response(
            {
                'success': False,
                'message': 'Failed to submit enquiry',
                'errors': serializer.errors
            },
            status=status.HTTP_400_BAD_REQUEST
        )
