from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Note
from .serializers import NoteSerializer

@api_view(['GET',])
def get_notes(request):

    if request.method == 'GET':
        data = Note.objects.all()
        serializer = NoteSerializer(data, many=True)
        return Response(serializer.data)
