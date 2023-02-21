from django.urls import path
from .views import *

urlpatterns = [
    path('', apiOverview, name='api-overview'),
    path('expenditures/', expenditureList, name='expenditures'),
    path('exp-detail/<str:pk>/', getExpenditure, name='expenditure-detail'),
    path('exp-create/', createExpenditure, name='expenditure-create'),
    path('exp-delete/<str:pk>/', deleteExpenditure, name='expenditure-delete'),
    path('limit/', SpendingLimitView.as_view()),
]
