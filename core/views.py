from django.shortcuts import render, get_object_or_404
from .models import Shoe

def home(request):
    shoes = Shoe.objects.order_by('?')[:6]
    return render(request, "home.html", {'shoes': shoes})


def shop(request):
    shoes = Shoe.objects.order_by('?')
    return render(request, 'shop.html', {'shoes': shoes})

def shoe_detail(request, pk):
    shoe = get_object_or_404(Shoe, pk=pk)
    return render(request, 'shoe_detail.html', {'shoe': shoe})


def cart(request):
    return render(request, "cart.html")


def order(request):
    return render(request, "order.html")

