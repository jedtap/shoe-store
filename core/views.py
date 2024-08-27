import random

from django.shortcuts import render, get_object_or_404
from .models import Shoe

def home(request):
    shoes = Shoe.objects.order_by('?')[:6]
    return render(request, "home.html", {'shoes': shoes})


def shop(request):
    return render(request, "shop.html")

def shoe_detail(request, pk):
    shoe = get_object_or_404(Shoe, pk=pk)
    return render(request, 'shoe_detail.html', {'shoe': shoe})


def checkout(request):
    return render(request, "checkout.html")


def order(request):
    return render(request, "order.html")

