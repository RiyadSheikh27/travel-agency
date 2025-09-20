from django.shortcuts import render
from .models import *
from .serializers import *
from rest_framework import viewsets

class CardViewSet(viewsets.ModelViewSet):
    queryset = Card.objects.all()
    serializer_class = CardSerializer