from config import db
from flask_restful import Resource
from datetime import datetime

from models.events import Event

def update_ticket_count(event_id, num):

    try:
        event = Event.query.get(event_id)

        if not event_id:
            return {"error": "event not found"}, 404
        
        event.current_total += num
        db.session.commit()

        return None, 200

    except Exception as e:
        db.session.rollback()
        return {'error', 'error occured, the event current_total was not updated', 'details', str(e)}, 422

   

   