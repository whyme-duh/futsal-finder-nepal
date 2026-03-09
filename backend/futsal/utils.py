
from datetime import datetime, timedelta
from models import Booking, Futsal


def get_available_slots(futsal, booking_date):
    slots = []

    current_time = datetime.combine(booking_date, futsal.opening_time)
    closing_time = datetime.combine(booking_date, futsal.closing_time)

    while current_time < closing_time:
        end_time = current_time + timedelta(hours = 1)
        slots.append({
            'start_time': current_time.time(),
            'end_time' : end_time.time()
        })
        current_time = end_time
    
    booked_slot = Booking.objects.filter(
        futsal = futsal,
        booking_date = booking_date
    ).exclude(status = "Cancelled").values_list('start_time', flat = True)

    available_slots = [
        slot for slot in slots
        if slot['start_time'] not in booked_slot
    ]
    return available_slots



futsal = Futsal.objects.all()
print(get_available_slots(futsal[0], datetime.now().date()))
    