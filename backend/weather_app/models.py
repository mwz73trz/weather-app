from django.db import models
from django.contrib.auth.models import User

class AddressList(models.Model):
    name = models.CharField(max_length=128)
    user = models.ForeignKey(User, related_name="address_lists", on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.name} by {self.user.username}"

class Address(models.Model):
    list = models.ForeignKey(AddressList, related_name="addresses", on_delete=(models.CASCADE))
    street = models.CharField(max_length=128)
    city = models.CharField(max_length=128)
    state = models.CharField(max_length=2)
    zipcode = models.CharField(max_length=5)

    def __str__(self):
        return f"{self.street}, {self.city}, {self.state} {self.zipcode}"
