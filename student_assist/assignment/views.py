from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Assignment
from .serializers import AssignmentSerializer
from . import serializers

@api_view(['GET',])
def get_assignments(request):

    if request.method == 'GET':
        data = Assignment.objects.all()
        serializer = AssignmentSerializer(data, many=True)
        return Response(serializer.data)

@api_view(['POST',])
def create_assignment(request):
    serializer = AssignmentSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response("Error")

@api_view(['POST',])
def update_assignment(request, pk):
    assignment = Assignment.objects.get(assignment_id=pk)    
    serializer = AssignmentSerializer(instance=assignment, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.data)

@api_view(['DELETE',])
def delete_assignment(request, pk):
    assignment = Assignment.objects.get(assignment_id=pk)
    assignment.delete()
    return Response("Assignment Successfully Deleted!")