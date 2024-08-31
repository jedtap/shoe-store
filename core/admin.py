from django.contrib import admin
from .models import Shoe
from .models import Order

admin.site.register(Shoe)
admin.site.register(Order)