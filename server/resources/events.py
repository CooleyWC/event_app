from flask_restful import Resource
from models.events import Event

class Events(Resource):
    def get(self):

        events = [event.to_dict() for event in Event.query.all()]
        
        return events, 200