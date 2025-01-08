from config import db
from flask_restful import Resource
from datetime import datetime

from models.events import Event

def check_ticket_count(event_id, num):

    event = Event.query.get(event_id)

    if not event_id:
        return {"error": "event not found"}, 404

    event_capacity = event.capacity
    current_total = event.current_total

    if current_total + num > event_capacity:
        return {"error": "capacity for this event has been reached", 
                "capacity": event_capacity, 
                "number of tickets attempted to process": num
                }, 422
    else:
        result = {"error": False, "message": "All good - tickets will be reserved"}
        return result, 200

