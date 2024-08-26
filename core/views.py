from django.shortcuts import render

from .models import Shoe

def home(request):
    shoes = Shoe.objects.all()
    return render(request, "home.html", {'shoes': shoes})


def shop(request):
    return render(request, "shop.html")


def item(request):
    return render(request, "item.html")


def checkout(request):
    return render(request, "checkout.html")


def order(request):
    return render(request, "order.html")

