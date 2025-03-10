from config import app, api, db, os
from models.users import User
from models.tickets import Ticket
from models.events import Event
from models.venues import Venue
from flask_restful import Resource

from resources.users import Users
from resources.login import Login
from resources.signup import Signup
from resources.check_session import CheckSession
from resources.logout import Logout
from resources.events import Events
from resources.venues import Venues
from resources.event_by_id import EventByID
from resources.process_ticket import ProcessTicket
from resources.ticket_by_id import TicketByID
from resources.venue_by_id import VenueByID



from flask import render_template

# @app.route('/')
# @app.route('/index')
# def index():
#   return render_template('index.html', title='Home', user='will')


@app.route('/tickets')
def tickets():
  return [ticket.to_dict() for ticket in Ticket.query.all()]


# @app.route('/venues')
# def tickets():
#   return [venue.to_dict() for venue in Venue.query.all()]

# @app.route('/events')
# def events():
#   return [event.to_dict() for event in Event.query.all()]

api.add_resource(Venues, '/api/venues')

api.add_resource(Users, '/api/users')
api.add_resource(Login, '/api/login')
api.add_resource(Signup, '/api/signup')
api.add_resource(CheckSession, '/api/check_session')
api.add_resource(Logout, '/api/logout')
api.add_resource(Events, '/api/events')
api.add_resource(EventByID, '/api/event_by_id/<int:id>')
api.add_resource(ProcessTicket, '/api/process_ticket')
api.add_resource(TicketByID, '/api/ticket_by_id/<int:id>')
api.add_resource(VenueByID, '/api/venue_by_id/<int:id>')


if __name__ == "__main__":
  app.run(port=5555, debug=True)
