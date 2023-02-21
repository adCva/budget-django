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
def getExpenditure(request, pk):
    expenditure = Expenditure.objects.get(id=pk)
    serializer = ExpendituresSerializer(expenditure, many=False)

    return Response(serializer.data)



@csrf_exempt
def createExpenditure(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        instance = Expenditure(
            name = data['name'],
            desc = data['desc'],
            spent = data['spent'],
            type = data['type'],
        )
        instance.save()

        return JsonResponse({'id': instance.id})

    else:
        return HttpResponseNotAllowed(['POST'])
    


@api_view(['DELETE'])
def deleteExpenditure(request, pk):
    expenditure = Expenditure.objects.get(id=pk)
    expenditure.delete()

    expenditures = Expenditure.objects.all()
    serializer = ExpendituresSerializer(expenditures, many=True)

    return JsonResponse(serializer.data, safe=False)