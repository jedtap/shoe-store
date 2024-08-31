from django.shortcuts import render, redirect, get_object_or_404
from .models import Shoe
from .models import Order

from django.http import JsonResponse
import json
from django.urls import reverse

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
    if request.method == 'POST':
        data = json.loads(request.body)
        cartItems = data.get('cartItems', [])
        shoes = Shoe.objects.filter(id__in=cartItems)
        shoes_data = [
            {
                'pk': shoe.pk,
                'name': shoe.name,
                'shoe_type': shoe.shoe_type,
                'price_usd': shoe.price_usd,
                'image_url': shoe.image.url,
                'url': reverse('shoe_detail', args=[shoe.pk])
            }
            for shoe in shoes
        ]
        return JsonResponse({'shoes': shoes_data})
    else:
        return render(request, 'cart.html')

def checkout(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        cartItems = data.get('cartItems', [])
        shoes = Shoe.objects.filter(id__in=cartItems)
        shoes_data = [
            {
                'pk': shoe.pk,
                'name': shoe.name,
                'shoe_type': shoe.shoe_type,
                'price_usd': shoe.price_usd,
                'image_url': shoe.image.url,
            }
            for shoe in shoes
        ]
        return JsonResponse({'shoes': shoes_data})
    else:
        return render(request, 'checkout.html')

def new_order(request):
    if request.method == 'POST':
        items = json.loads(request.POST.get('items'))
        order = Order()
        order.name = request.POST.get('name')
        order.address = request.POST.get('address')
        order.contact = request.POST.get('contact')
        order.items = items
        order.save()
        return redirect('home')
    else:
        return render(request, 'checkout.html')