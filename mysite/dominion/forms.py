from django import forms
from . import models
class NamesForm(forms.Form):
    name_field = forms.CharField(
        label='Name',
        max_length=50
        )


    def save(self):
        return self.cleaned_data["name_field"]