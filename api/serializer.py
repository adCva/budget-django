from rest_framework import serializers
from .models import *

class ExpendituresSerializer(serializers.ModelSerializer):
    class Meta:
        model = Expenditure
        fields = '__all__'
        # fields = ('id', 'name', 'desc', 'spent', 'type', 'created_at')


class SpendingLimitSerializer(serializers.ModelSerializer):
    class Meta:
        model = SpendingLimit
        fields = '__all__'
        # fields = ('id', 'total', 'dateLimit')
