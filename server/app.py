from config import app, api, db, os
from models.users import User
from models.tickets import Ticket
from models.events import Event
from models.venues import Venue
from flask_restful import Resource

from resources.users import Users
from resources.login import Login
from resources.check_session import CheckSession
from resources.logout import Logout
from resources.events import Events
from resources.event_by_id import EventByID
from resources.process_ticket import ProcessTicket



from flask import render_template

# @app.route('/')
# @app.route('/index')
# def index():
#   return render_template('index.html', title='Home', user='will')


api.add_resource(Users, '/api/users')
api.add_resource(Login, '/api/login')
api.add_resource(CheckSession, '/api/check_session')
api.add_resource(Logout, '/api/logout')
api.add_resource(Events, '/api/events')
api.add_resource(EventByID, '/api/event_by_id/<int:id>')
api.add_resource(ProcessTicket, '/api/process_ticket')

if __name__ == "__main__":
  app.run(port=5555, debug=True)
