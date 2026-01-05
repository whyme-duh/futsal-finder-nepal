from django.shortcuts import render
from . models import Futsal
from . serializers import FutsalModelSerializer
from rest_framework import viewsets

class FutsalViewSet(viewsets.ModelViewSet):
    queryset = Futsal.objects.all()
    serializer_class = FutsalModelSerializer