from django.urls import path

from rest_framework.authtoken.views import obtain_auth_token

from . import views

app_name = "account"

urlpatterns = [
    path('register-user/', views.registration_view, name="users-list"),
    path('login-user/', obtain_auth_token, name="users-detail")
]