from config import app, api, db, os
from models.users import User
from models.tickets import Ticket
from models.events import Event
from flask_restful import Resource

from resources.users import Users


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

if __name__ == "__main__":
  app.run(port=5555, debug=True)
