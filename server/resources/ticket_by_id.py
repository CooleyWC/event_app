from config import db
from flask_restful import Resource
from models.tickets import Ticket
from models.events import Event

from services.update_ticket_count import update_ticket_count


class TicketByID(Resource):
    def get(self, id):
        ticket = Ticket.query.filter(Ticket.id==id).first()

        ticket_dict = ticket.to_dict()

        return ticket_dict, 200

    def delete(self, id):

        try:
            ticket = Ticket.query.filter(Ticket.id==id).first()

            event_id = ticket.event_id

            event = Event.query.filter(Event.id==id).first()

            db.session.delete(ticket)
            db.session.commit()

            update_ticket_count(event_id, -1)

            

            return {"message": "ticket deleted successfully", "event_id": event_id, "event": event.to_dict()}, 200
        
        except:
            error = {"error": "there was a problem deleting this message"}
            return error, 422
