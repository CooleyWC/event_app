from config import db
from flask_restful import Resource
from models.events import Event
from flask import request, session

class Events(Resource):
    def get(self):

        events = [event.to_dict() for event in Event.query.all()]
        
        return events, 200
    
    def post(self):

        json = request.get_json()

        try:

            print('the json', json)
            event = Event(
                name = json.get('name'),
                start_time = json.get('startTime'),
                endTime = json.get('endTime'),
                image = json.get('image'),
                description = json.get('description'),
                user_id = json.get('userId')

            )

            breakpoint()

            db.session.add(event)
            db.session.commit()

            event_dict = event.to_dict()

            return event_dict, 201
        
        except:
            error={'error': 'there was an error adding this event'}
            return error, 422
    
   

    