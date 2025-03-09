from flask_restful import Resource
from models.events import Event
from flask import request, session
from config import app, api, db


class EventByID(Resource):
    def get(self, id):
        event = Event.query.filter(Event.id==id).first()

        event_dict = event.to_dict()

        return event_dict, 200

    def patch(self, id):
        data = request.get_json()

        if data:
            try:
                event = Event.query.filter(Event.id==id).first()

                for attr in data:
                    if attr == 'name':
                        setattr(event, attr, data.get(attr))

                db.session.add(event)
                db.session.commit()

                event_dict = event.to_dict()
                return event_dict, 200

            except:
                error = {'error': 'there was an error updating this event'}
                return error, 422
            
        else:
            error = {'error': 'there was a problem accessing this event in the database'}
            return error, 400