from config import db
from flask_restful import Resource
from flask import request
from datetime import datetime

from models.events import Event
from models.tickets import Ticket
from services.check_event_conflict import check_event_conflict
from services.check_ticket_count import check_ticket_count
from services.update_ticket_count import update_ticket_count

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

        capacity_check_result, cytcr_status_code = check_ticket_count(
            event_id, 
            # later, update this to accomodate multiple ticket purchases
            1
        )

        if capacity_check_result['error']:
            return capacity_check_result, cytcr_status_code
        
        try:
            new_ticket = Ticket(
                user_id = user_id,
                event_id = event_id,
                price = price,
            )

            db.session.add(new_ticket)
            db.session.commit()

            update_result, update_status_code = update_ticket_count(event_id, 1)
            if update_result:
                return update_result, update_status_code

            event=Event.query.get(event_id)
            return {'ticket': new_ticket.to_dict(), 'event': event.to_dict()}, 200

        except Exception as e:
            db.session.rollback()
            error = {'error': 'there was a problem processing this ticket', 'details': str(e)}
            return error, 422
            



