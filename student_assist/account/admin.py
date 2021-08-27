from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.models import User
from .models import Account


class AccountAdmin(UserAdmin):
    model = Account
    list_display = ('email', 'username', 'first_name', 'last_name', 'date_joined', 'last_login', 'is_admin', 'is_staff')
    search_field = ('email', 'username', 'first_name')
    readonly_fields = ('user_id', 'date_joined', 'last_login')

    filter_horizontal = ()
    list_filter = ()
    fieldsets = ()

    verbose_name = 'Account'
    verbose_name_plural = 'Accounts'

admin.site.register(Account, AccountAdmin)