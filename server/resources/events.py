from flask_restful import Resource
from models.events import Event
from flask import request, session

class Events(Resource):
    def get(self):

        events = [event.to_dict() for event in Event.query.all()]
        
        return events, 200
    
   

    