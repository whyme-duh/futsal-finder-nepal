from django.db import models
from django.contrib.auth.models import User
from ckeditor.fields import RichTextField

class Futsal(models.Model):
    name = models.CharField(max_length=100)
    location = models.CharField(max_length = 100)
    no_of_grounds = models.IntegerField(default=1)
    description = RichTextField()
    slug = models.SlugField(default='', null= False)
    


    def __str__(self):
        return f'{self.name} at {self.location}'


class Booking(models.Model):
    name = models.CharField(max_length = 50, null = True, blank = True)
    booking_day = models.CharField(null = True, blank = True)
    booking_slot = models.CharField(null = True, blank = True)
    futsal = models.ForeignKey(Futsal, on_delete=models.PROTECT, related_name='futsal')
    user = models.ForeignKey(User, on_delete=models.PROTECT, related_name='user' )

    def __str__(self):
        return f'Nooked by {self.name} at {self.futsal}'

