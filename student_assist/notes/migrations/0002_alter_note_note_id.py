# Generated by Django 3.2.4 on 2021-06-08 16:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('notes', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='note',
            name='note_id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]
