from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
from django.shortcuts import  render, redirect
from django.shortcuts import render
from django.urls import reverse_lazy
from django.contrib.auth.forms import UserCreationForm
from django.views.generic.edit import CreateView
# editing view.py file
from . import models
from . import forms
def index(request, page=0):
    data_list = {}
    data_list["cards"] = []
    cards_list = models.KingdomCardModel.objects.all()
    for name in cards_list:
        card_instance = {}
        card_instance["name"] = name.Name
        data_list["cards"].append(card_instance)
    context = { 
        'cards_list': cards_list,
        "title": "Dominion Card Randomizer",
        "data": data_list,    
    }
    return render(request, 'index.html', context = context)

def getCards(request):
    data_list = {}
    data_list["cards"] = []
    cards_list = models.KingdomCardModel.objects.all()
    for name in cards_list:
        card_instance = {}
        card_instance["name"] = name.Name
        data_list["cards"].append(card_instance)
    return JsonResponse(data_list)

class SignUp(CreateView):
    form_class = UserCreationForm
    success_url = reverse_lazy("login")
    template_name = "registration/signup.html"

def room(request, room_name):
    return render(request, 'room.html', {
        'room_name': room_name
    })