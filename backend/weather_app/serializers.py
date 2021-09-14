from rest_framework.serializers import ModelSerializer, StringRelatedField
from weather_app.models import AddressList, Address

class AddressListSerializer(ModelSerializer):
    class Meta:
        model = AddressList
        fields = ['id', 'name', 'user', 'addresses']
        depth = 1

    user = StringRelatedField()

class AddressSerializer(ModelSerializer):
    class Meta:
        model = Address
        fields = '__all__'