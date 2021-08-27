from django.urls import path

from . import views

urlpatterns = [
    path('get-assignments/', views.get_assignments, name="get-assignments"),
    path('create-assignment/', views.create_assignment, name="create-assignments"),
    path('update-assignment/<str:pk>/', views.update_assignment, name="update-assignments"),
    path('delete-assignment/<str:pk>/', views.delete_assignment, name="delete-assignments"),
]