from django.db import models
from ckeditor.fields import RichTextField

class Futsal(models.Model):
    name = models.CharField(max_length=100)
    location = models.CharField(max_length = 100)
    no_of_grounds = models.IntegerField(default=1)
    description = RichTextField()


    def __str__(self):
        return f'{self.name} at {self.location}'

