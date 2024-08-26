from django.db import models

class Shoe(models.Model):
    name = models.CharField(max_length=100)
    shoe_type = models.CharField(max_length=50)
    price_usd = models.DecimalField(max_digits=10, decimal_places=2)
    image = models.ImageField(upload_to='shoes/')

    def __str__(self):
        return self.name
