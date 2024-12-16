from config import db
from flask_restful import Resource
from flask import request
from datetime import datetime

from models.events import Event
from models.tickets import Ticket
from services.check_event_conflict import check_event_conflict

class ProcessTicket(Resource):
    def post(self):
        data=request.get_json()

        user_id = data['user_id']
        event_id = data['event_id']
        start_time = data['start_time']
        end_time = data['end_time']
        price = data['price']

        conflict_check_result, status_code = check_event_conflict(
            user_id,
            event_id, 
            start_time, 
            end_time, 
        )

        if conflict_check_result['conflict']:
            return conflict_check_result, status_code
        
        try:
            new_ticket = Ticket(
                user_id = user_id,
                event_id = event_id,
                price = price,
            )

            db.session.add(new_ticket)
            db.session.commit()

            event=Event.query.get(event_id)

            return {'ticket': new_ticket.to_dict(), 'event': event.to_dict()}, 200

        except:
            error = {'error': 'there was a problem processing this ticket'}
            return error, 422
            



