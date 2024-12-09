from flask_restful import Resource
from models.events import Event


class EventByID(Resource):
    def get(self, id):
        event = Event.query.filter(Event.id==id).first()

        event_dict = event.to_dict()

        return event_dict, 200
