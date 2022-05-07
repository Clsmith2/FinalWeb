from tokenize import Name
from django.contrib import admin

from .models import KingdomCardModel, NamesModel

admin.site.register(NamesModel)
admin.site.register(KingdomCardModel)