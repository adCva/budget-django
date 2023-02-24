from django.shortcuts import render
from django.http import JsonResponse, HttpResponseNotAllowed
from rest_framework import generics, status
from rest_framework.decorators import api_view
from django.views.decorators.csrf import csrf_exempt
from rest_framework.response import Response
from .models import *
from .serializer import *
import json

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

    return JsonResponse(serializer.data, safe=False)



@api_view(['GET'])
def getData(request):
    dataList = Expenditure.objects.all().order_by('-id')
    serializer = ExpendituresSerializer(dataList, many=True)

    return Response(serializer.data)


@api_view(['GET'])
def getDetail(request, pk):
    item = Expenditure.objects.get(id=pk)
    serializer = ExpendituresSerializer(item, many=False)
    return Response(serializer.data)


@api_view(['POST'])
def createData(request):
    newData = ExpendituresSerializer(data=request.data)

    if newData.is_valid():
        newData.save()

    return Response(newData.data)


@api_view(['PUT'])
def updateItem(request, pk):
    try:
        item = Expenditure.objects.get(id=pk)
    except Expenditure.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    serializer = ExpendituresSerializer(item, data=request.data)

    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['DELETE'])
def deleteItem(request, pk):
    item = Expenditure.objects.get(id=pk)
    item.delete()

    return Response("Item deleted!")