from django.db import models
class KingdomCardModel(models.Model):
    Name = models.CharField(max_length=250, default= "Card_Name")
    Set = models.CharField(max_length=240, default= "Card_Set")
    Types = models.CharField(max_length=240, default= "Card_Type")
    Cost = models.CharField(max_length=20, default="0")
    Actions = models.CharField(max_length=20, default="0")
    Cards = models.CharField(max_length=20, default="0")
    Buys = models.CharField(max_length=20, default="0")
    Coins = models.CharField(max_length=20, default="0")
    Trash = models.CharField(max_length=20, default="0")
    Exile = models.CharField(max_length=20, default="0")
    Junk = models.CharField(max_length=20, default="0")
    Gain = models.CharField(max_length=20, default="0")
    Victory_Points = models.CharField(max_length=20, default="0")

class NamesModel(models.Model):
    
    name = models.CharField(max_length = 50, default ="Your Name")