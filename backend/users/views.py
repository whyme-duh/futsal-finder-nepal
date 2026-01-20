from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated
from . serializers import RegisterSerializer

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny, )
    serializer_class = RegisterSerializer


class ProfileView(APIView):
    permission_classes = (IsAuthenticated, )

    def get(self, request):
        context ={
            "username" : request.user.username,
            "email" : request.user.email,
        }
        return Response(context)

