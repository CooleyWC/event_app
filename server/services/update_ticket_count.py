from config import db
from flask_restful import Resource
# from flask import request
from datetime import datetime

from models.events import Event
from models.tickets import Ticket

def update_ticket_count(event_id, num):


    try:
        event = event.query.get(event_id == Event.id).first()

        event.current_total += num

        db.session.commit()

        return None, 200

    except:
        return {'error', 'error occured, the event current_total was not updated'}, 422

   

   