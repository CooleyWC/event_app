from config import app, db
from models.users import User
from models.tickets import Ticket
from models.events import Event
from datetime import datetime, timezone


if __name__ == "__main__":
  with app.app_context():
    pass
    # remove pass and write your seed data
    User.query.delete()
    Ticket.query.delete()

    print('adding users')
    user_1 = User(first_name='will', last_name='coole', email='willia@gmail.com', location='fort wayne')
    user_1.password_hash='paradiddle'
    user_2 = User(first_name='charles', last_name='barkley', email='cb@gmail.com', location='chicago')
    user_2.password_hash='paradiddle'
    user_3 = User(first_name='michael', last_name='shannon', email='msh@gmail.com', location='chicago')
    user_3.password_hash='paradiddle'

    db.session.add_all([user_1, user_2, user_3])
    db.session.commit()

    print('adding tickets')
    ticket_1 = Ticket(price=4, user_id=1, event_id=1)
    ticket_2 = Ticket(price=2, user_id=3, event_id=1)

    db.session.add_all([ticket_1, ticket_2])
    db.session.commit()

    print('adding events')
    event_1 = Event(name='Percussion Concert', description='Third Coast Percussion', creator_id=1)

    db.session.add(event_1)
    db.session.commit()


    print('all done')