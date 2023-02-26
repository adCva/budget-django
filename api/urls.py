from django.urls import path
from .views import *

urlpatterns = [
    path('', apiOverview, name='api-overview'),
    path('get-data/', getData, name='get-data'),
    path('get-detail/<str:pk>/', getDetail, name='get-detail'),
    path('exp-create/', createData, name='create-data'),
    path('exp-update/<int:pk>/', updateItem, name='update-data'),
    path('exp-delete/<int:pk>/', deleteItem, name='delete-data'),
    path('get-limit/', getLimit, name='get-limit'),
    path('update-limit/', updateLimit, name='update-limit'),
]