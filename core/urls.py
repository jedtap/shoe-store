from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('shop/', views.shop, name='shop'),
    path('shoe/<int:pk>/', views.shoe_detail, name='shoe_detail'),
    path('cart/', views.cart, name='cart'),
    path('checkout/', views.checkout, name='checkout'),
    path('new_order/', views.new_order, name='new_order'),
    path('success/', views.success, name='success'),
]
