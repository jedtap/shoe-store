from django.shortcuts import render


def home(request):
    return render(request, "home.html")


def shop(request):
    return render(request, "shop.html")


def item(request):
    return render(request, "item.html")


def checkout(request):
    return render(request, "checkout.html")


def order(request):
    return render(request, "order.html")

