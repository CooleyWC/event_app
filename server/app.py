from config import app, api, db, os
from models.users import User
from models.tickets import Ticket
from models.events import Event
from flask_restful import Resource

from resources.users import Users
from resources.login import Login
from resources.check_session import CheckSession
from resources.logout import Logout


from flask import render_template

@app.route('/')
@app.route('/index')
def index():
  return render_template('index.html', title='Home', user='will')


# @app.route('/users')
# def users():
#   users = [user.to_dict() for user in User.query.all()]
#   return users, 200

# @app.route('/tickets')
# def tickets():
#   tickets = [ticket.to_dict() for ticket in Ticket.query.all()]
#   return tickets, 200

# @app.route('/events')
# def events():
#   events = [event.to_dict() for event in Event.query.all()]
#   return events, 200
  
api.add_resource(Users, '/api/users')
api.add_resource(Login, '/api/login')
api.add_resource(CheckSession, '/api/check_session')
api.add_resource(Logout, '/api/logout')

if __name__ == "__main__":
  app.run(port=5555, debug=True)
