from django.shortcuts import render
from django.http import HttpResponse
from django.views import View

def  shortenit_redirect_view(request, *args, **kwargs):
    return HttpResponse("Hello")

class ShortenitCBView(View):
    def get(self, request, *args, **kwargs):
        return HttpResponse("Hello again")