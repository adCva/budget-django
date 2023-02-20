from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import *
from .serializer import *

# Create your views here.
class ExpenditureView(generics.ListAPIView):
    queryset = Expenditure.objects.all()
    serializer_class = ExpendituresSerializer


class SpendingLimitView(generics.ListAPIView):
    queryset = SpendingLimit.objects.all()
    serializer_class = SpendingLimitSerializer



@api_view(['GET'])
def apiOverview(request):
    api_urls = {
        'Expenditure':'expenditure-list',
        'Limit': 'limit-view',
		'Create':'/expenditure-create/',
		'Update':'/expenditure-update/<str:pk>/',
		'Delete':'/expenditure-delete/<str:pk>/',
	}

    return Response(api_urls)



@api_view(['GET'])
def expenditureList(request):
    expenditures = Expenditure.objects.all()
    serializer = ExpendituresSerializer(expenditures, many=True)

    return Response(serializer.data)



@api_view(['GET'])
def getExpenditure(request, pk):
    expenditure = Expenditure.objects.get(id=pk)
    serializer = ExpendituresSerializer(expenditure, many=False)

    return Response(serializer.data)