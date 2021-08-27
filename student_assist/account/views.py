from django.shortcuts import render

from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.authtoken.models import Token

from .models import Account
from .serializers import RegistrationSerializer

@api_view(['POST',])
def registration_view(request):
    
    if request.method == 'POST':
        serializer = RegistrationSerializer(data=request.data)
        data = {}

        if serializer.is_valid():
            account = serializer.save()
            data['response'] = "Successfully Registered a new user."
            data['first_name'] = account.first_name
            data['last_name'] = account.last_name
            data['email'] = account.email
            data['username'] = account.username
            token = Token.objects.get(user=account).key
            data['token'] = token
        else:
            data = serializer.errors
        return Response(data)


class UserDetail(generics.RetrieveAPIView):
    queryset = Account.objects.all()
    serializer_class = RegistrationSerializer