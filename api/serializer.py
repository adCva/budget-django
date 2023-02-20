from rest_framework import serializers
from .models import *

class ExpendituresSerializer(serializers.ModelSerializer):
    class Meta:
        model = Expenditure
        # fields = ('name', 'desc', 'spent', 'type', 'created_at')
        fields = '__all__'


class SpendingLimitSerializer(serializers.ModelSerializer):
    class Meta:
        model = SpendingLimit
        fields = ('total',)
