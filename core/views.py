from django.shortcuts import render, get_object_or_404
from .models import Shoe

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
    return render(request, "checkout.html")

