from django.db import models
from django.contrib.auth.models import User
from ckeditor.fields import RichTextField

class Futsal(models.Model):

    TURF_TYPE = [
       ('Artificial Grass', 'Artificial Grass'),
       ('Mat', 'Mat'),
       ('Real Grass', 'Real Grass')
    ]

    FUTSAL_SIDE = [
        ('5-A Side', '5-A Side'),
        ('7-A Side', '7-A Side'),
        ('Both 5-A and 7-A Sides', 'Both 5-A and 7-A Sides'),
    ]

    

    name = models.CharField(max_length=100)
    location = models.CharField(max_length = 100)
    no_of_grounds = models.IntegerField(default=1)
    description = RichTextField()
    slug = models.SlugField(default='', null= False)
    # features
    shower_available = models.BooleanField(null= True, blank = True, default= True)
    changing_room = models.BooleanField(null = True, blank = True, default= True)
    parking_available = models.BooleanField(null= True, blank = True, default= True)
    futsal_side = models.TextField(choices=FUTSAL_SIDE, default="5-A Side", null = True, blank = True)
    turf_type = models.TextField(choices=TURF_TYPE, default="Artificial Grass", null = True, blank = True)
    opening_time = models.TimeField(null = True, blank = True)
    closing_time = models.TimeField(null = True, blank = True)


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

