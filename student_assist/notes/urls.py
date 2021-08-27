from django.urls import path

from . import views

urlpatterns = [
    path('get-notes/', views.get_notes, name="get notes")
]