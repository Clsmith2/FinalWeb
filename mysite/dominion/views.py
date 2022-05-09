from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
from json import dumps
# editing view.py file
from . import models
from . import forms
def index(request, page=0):
    if request.method == "POST":
        if request.user.is_authenticated:
            form = forms.NamesForm(request.POST)
            if form.is_valid():
                form.save()
                form = forms.NamesForm()
        else:
            form = forms.NamesForm()
    else:
        form = forms.NamesForm()
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
        "form": form   
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