from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('shop/', views.shop, name='shop'),
    path('shoe/<int:pk>/', views.shoe_detail, name='shoe_detail'),
    path('cart/', views.cart, name='cart'),
    path('order/', views.order, name='order'),
]
