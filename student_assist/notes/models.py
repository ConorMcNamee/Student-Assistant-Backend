from django.db import models
from ckeditor.fields import RichTextField

class Note(models.Model):
    note_id         = models.AutoField(primary_key=True)
    note_title      = models.CharField(max_length=255)
    content         = RichTextField(blank=True, null=True)
    created_at      = models.DateTimeField(auto_now_add=True)
    updated_at      = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.note_title
