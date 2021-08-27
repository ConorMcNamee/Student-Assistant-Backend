from django.db import models

class Assignment(models.Model):
    assignment_id       = models.AutoField(primary_key=True)
    assignment_title    = models.CharField(max_length=255)
    assignment_date     = models.DateTimeField(auto_now_add=True)
    assignment_progress = models.BooleanField(default=False)

    def __str__(self):
        return self.assignment_title