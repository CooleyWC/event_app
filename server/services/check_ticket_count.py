from config import db
from flask_restful import Resource
# from flask import request
from datetime import datetime

from models.events import Event
from models.tickets import Ticket

def check_ticket_count(event_id, num):

    print('check_update ran')

    event = Event.query.get(event_id == Event.id).first()

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

