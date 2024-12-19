from config import db
from flask_restful import Resource
from models.tickets import Ticket


class TicketByID(Resource):
    def get(self, id):
        ticket = Ticket.query.filter(Ticket.id==id).first()

        ticket_dict = ticket.to_dict()

        return ticket_dict, 200

    def delete(self, id):

        try:
            ticket = Ticket.query.filter(Ticket.id==id).first()

            db.session.delete(ticket)
            db.session.commit()

            return {"message": "ticket deleted successfully"}, 200
        
        except:
            error = {"error": "there was a problem deleting this message"}
            return error, 422
