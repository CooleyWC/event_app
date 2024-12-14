from config import db
from flask_restful import Resource
# from flask import request
from datetime import datetime

from models.events import Event
from models.tickets import Ticket

def check_event_conflict(user_id, event_id, start_time, end_time):
    existing_ticket = Ticket.query.filter(
        Ticket.user_id==user_id, 
        Ticket.event_id==event_id
        ).first()

    if existing_ticket:
        error = {"conflict": True, "message": 'You already have a ticket for this event.'}
        return error, 422
        
    incoming_start_time_format = datetime.fromisoformat(start_time.replace('Z', ''))
    incoming_end_time_format = datetime.fromisoformat(end_time.replace('Z', ''))
        
    user_events = db.session.query(Event).join(Ticket).filter(Ticket.user_id == user_id).all()

    conflicts = []

    for event in user_events:
        if event.start_time <= incoming_end_time_format and event.end_time >= incoming_start_time_format:
            conflicts.append(event)       

    if len(conflicts) > 0:
        conflict_list = [conflict.to_dict() for conflict in conflicts]
        error = {"conflict": True, "message": "You have a conflict with this event", "conflicts": conflict_list}
        return error, 422
    else:
        result = {"conflict": False, "message": "All good - no conflicts here"}
        return result, 200

