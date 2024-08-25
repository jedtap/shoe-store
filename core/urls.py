from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('shop/', views.shop, name='shop'),
    path('item/', views.item, name='item'),
    path('checkout/', views.checkout, name='checkout'),
    path('order/', views.order, name='order'),
]
