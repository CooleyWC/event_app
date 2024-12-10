from config import app, db
from models.users import User
from models.tickets import Ticket
from models.events import Event
from models.venues import Venue
from datetime import datetime, timezone
import pytz


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


    print('adding venues')
    venue_1 = Venue(name='Wills House', location='1555 spicelane', capacity=10, description='backyard')
    venue_2 = Venue(name='Firefly Coffee', location='st joe', capacity=20, description='coffee shop')
    venue_3 = Venue(name='Sweetwater', location='goshen road', capacity=50, description='music megalopolis')
    venue_4 = Venue(name='Queso House', location='Dobree', capacity=5, description='texas')

    db.session.add_all([venue_1, venue_2, venue_3, venue_4])

    print('adding events')

    dateObj_1 = datetime(year=2025, month=4, day=12, hour=10, minute=30, second=30, tzinfo=pytz.UTC)
    dateObj_2 = datetime(year=2025, month=2, day=7, hour=11, minute=30, second=0, tzinfo=pytz.UTC)
    dateObj_3 = datetime(year=2025, month=7, day=19, hour=8, minute=30, second=0, tzinfo=pytz.UTC)
    dateObj_4 = datetime(year=2025, month=9, day=2, hour=12, minute=0, second=0, tzinfo=pytz.UTC)

    dateObj_1_end = datetime(year=2025, month=4, day=12, hour=12, minute=0, second=30, tzinfo=pytz.UTC)
    dateObj_2_end = datetime(year=2025, month=2, day=7, hour=15, minute=0, second=0, tzinfo=pytz.UTC)
    dateObj_3_end = datetime(year=2025, month=7, day=19, hour=10, minute=0, second=0, tzinfo=pytz.UTC)
    dateObj_4_end = datetime(year=2025, month=9, day=2, hour=14, minute=0, second=0, tzinfo=pytz.UTC)


    event_1 = Event(name='Third Coast Percussion', description='Percussion Ensemble concert by Third Coast Percussion. Premiering new works by Philip Glass', start_time=dateObj_1, end_time=dateObj_1_end, capacity=14, creator_id=1, venue_id=1)

    event_2 = Event(name='Takacs Quartet', description='World renowned sting quartet perfoming works by Mozart and Mos Def', start_time=dateObj_2, end_time=dateObj_2_end, creator_id=2, capacity=10, venue_id=2)

    event_3 = Event(name='Boston Brass', description='Some really good musicians playing on brass instruments. Perfoming Taylor Swifts entire anthology', start_time=dateObj_3, end_time=dateObj_3_end, creator_id=2, capacity=16, venue_id=3)

    event_4 = Event(name='Panoramic', description='Steel Pan based performing arts group. Perfoming works from their new album', start_time=dateObj_4, end_time=dateObj_4_end, creator_id=2, capacity=4, venue_id=4)



    db.session.add_all([event_1, event_2, event_3, event_4])
    db.session.commit()


    print('all done')