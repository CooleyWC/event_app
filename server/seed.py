from config import app, db
from models.users import User
from models.tickets import Ticket
from datetime import datetime, timezone


if __name__ == "__main__":
  with app.app_context():
    pass
    # remove pass and write your seed data
    User.query.delete()
    Ticket.query.delete()

    print('adding users')
    user_1 = User(username='will1', email='willia@gmail.com', location='fort wayne')
    user_1.password_hash='paradiddle'
    user_2 = User(username='mj', email='mj@gmail.com', location='chicago')
    user_2.password_hash='paradiddle'
    user_3 = User(username='capone', email='capone@gmail.com', location='chicago')
    user_3.password_hash='paradiddle'

    db.session.add_all([user_1, user_2, user_3])
    db.session.commit()

    print('adding tickets')
    ticket_1 = Ticket(price=4, user_id=1)
    ticket_2 = Ticket(price=2, user_id=3)

    db.session.add_all([ticket_1, ticket_2])
    db.session.commit()

