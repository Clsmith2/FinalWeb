from django.urls import path, include
from . import views
from .views import index, getCards
urlpatterns = [
    path('', index),
    path('cards/', getCards),
    path("accounts/", include("django.contrib.auth.urls")),
    path("signup/", views.SignUp.as_view(), name="signup"),
    path('<str:room_name>/', views.room, name='room'),
]
