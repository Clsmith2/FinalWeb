from django.urls import path
from . import views
from .views import index, getCards
urlpatterns = [
    path('', index),
    path('cards/', getCards),
]
