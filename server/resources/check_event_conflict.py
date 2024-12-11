from config import db
from flask_restful import Resource
from flask import request
from datetime import datetime

from models.events import Event
from models.tickets import Ticket

class CheckEventConflict(Resource):
    def post(self):
        data=request.get_json()

        incoming_user_id = data['user_id']
        incoming_event_id = data['event_id']
        incoming_start_time = data['start_time']
        incoming_end_time = data['end_time']

        existing_ticket = Ticket.query.filter(
            Ticket.user_id==incoming_user_id, 
            Ticket.event_id==incoming_event_id
            ).first()

        if existing_ticket:
            error = {"conflict": "whoops", "message": 'you already bought this ticket'}
            return error, 422

        event_conflicts = db.session.query(Ticket).join(Event).filter(
      
            Ticket.user_id == incoming_user_id,
            Event.id == incoming_event_id,
            Event.start_time <= incoming_end_time,
            Event.end_time >= incoming_start_time
        ).all()

        print('event conflicts', event_conflicts)

        if len(event_conflicts) > 0:
            error = {"conflict": True, "message": "Uh oh - you got conflicts"}
            return error, 422
        else:
            result = {"conflict": False, "message": "All good"}
            return result, 200
        