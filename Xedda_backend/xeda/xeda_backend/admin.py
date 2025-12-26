from django.contrib import admin
from .models import Contact

@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'phone', 'select_product', 'quality', 'city_pincode', 'created_at')
    list_filter = ('select_product', 'quality', 'created_at')
    search_fields = ('name', 'email', 'phone', 'select_product', 'quality', 'city_pincode'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           )
    ordering = ('-created_at',)



admin.site.site_header = "Xeda Admin"
admin.site.site_title = "Xeda Admin"
admin.site.index_title = "Welcome to Xeda website" 
