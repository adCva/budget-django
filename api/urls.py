from django.urls import path
from .views import *

urlpatterns = [
    path('', apiOverview, name='api-overview'),
    path('expenditures/', expenditureList, name='expenditures'),
    path('exp-detail/<str:pk>/', getExpenditure, name='expenditure-detail'),
    path('limit/', SpendingLimitView.as_view()),
]
