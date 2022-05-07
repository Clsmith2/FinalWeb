from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
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
    data_list["names"] = []
    names_list = models.NamesModel.objects.all()
    for name in names_list:
        name_instance = {}
        name_instance["name"] = name.name
        data_list["names"].append(name_instance)
    context = { 
        'names_list': names_list,
        "title": "Dominion Card Randomizer",
        "data": data_list, 
        "form": form   
    }
    return render(request, 'index.html', context = context)