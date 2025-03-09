from config import db
from flask_restful import Resource
from models.events import Event
from flask import request, session

from datetime import datetime
from dateutil import parser

class Events(Resource):
    def get(self):

        events = [event.to_dict() for event in Event.query.all()]
        
        return events, 200
    
    def post(self):

        json = request.get_json()
        start_time_obj = parser.parse(json.get('startTime'))
        end_time_obj = parser.parse(json.get('endTime'))

        try:

            image = json.get('image') or None

            event = Event(
                name = json.get('name'),
                start_time = start_time_obj,
                end_time = end_time_obj,
                image = image,
                description = json.get('description'), 
                creator_id = json.get('creatorId'), 
                venue_id = json.get('venueId'))

            db.session.add(event)
            db.session.commit()

            event_dict = event.to_dict()

            return event_dict, 201
        
        except:
            error={'error': 'there was an error adding this event'}
            return error, 422
    

    