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
    User.query.delete()
    Ticket.query.delete()
    Event.query.delete()
    Venue.query.delete()

    print('adding users')
    user_1 = User(first_name='Will', last_name='Cooley', email='will@gmail.com', location='fort wayne')
    user_1.password_hash='paradiddle'
    user_2 = User(first_name='Charles', last_name='Barkley', email='cb@gmail.com', location='chicago')
    user_2.password_hash='paradiddle'
    user_3 = User(first_name='Michael', last_name='Shannon', email='msh@gmail.com', location='chicago')
    user_3.password_hash='paradiddle'

    db.session.add_all([user_1, user_2, user_3])
    db.session.commit()

    # print('adding tickets')
    # ticket_1 = Ticket(price=4, user_id=1, event_id=1)
    # ticket_2 = Ticket(price=2, user_id=3, event_id=1)

    # db.session.add_all([ticket_1, ticket_2])
    # db.session.commit()


    print('adding venues')
    venue_1 = Venue(name='Wills House', street='1555 Madison', city='Fort Worth', state='CO', zip=23489, capacity=10, description='Living room space that fits 10 with lamps and 3 outlets.')
    venue_2 = Venue(name='Firefly Coffee', street='9834 St Joe', city='Denver', state='MA', zip=98243, capacity=20, description='Coffee Shop with 4ft of performance space')
    venue_3 = Venue(name='The Clyde', street='123 Goshen Rd.', city='Naperville', state='NV', zip=12398, capacity=50, description='Medium sized music venue with retro design and aesthetic.')
    venue_4 = Venue(name='Conjure Coffee', street='5 Dobree St', city='Chicago', state='WY', zip=23489, capacity=5, description='Coffee Shop with a stage and audio engineer.')

    db.session.add_all([venue_1, venue_2, venue_3, venue_4])

    print('adding events')

    dateObj_1 = datetime(year=2025, month=6, day=12, hour=10, minute=30, second=30, tzinfo=pytz.UTC)
    dateObj_2 = datetime(year=2025, month=8, day=7, hour=11, minute=30, second=0, tzinfo=pytz.UTC)
    dateObj_3 = datetime(year=2025, month=9, day=19, hour=8, minute=30, second=0, tzinfo=pytz.UTC)
    dateObj_4 = datetime(year=2025, month=11, day=2, hour=12, minute=0, second=0, tzinfo=pytz.UTC)

    print(dateObj_1)

    dateObj_1_end = datetime(year=2025, month=6, day=12, hour=12, minute=0, second=30, tzinfo=pytz.UTC)
    dateObj_2_end = datetime(year=2025, month=8, day=7, hour=15, minute=0, second=0, tzinfo=pytz.UTC)
    dateObj_3_end = datetime(year=2025, month=9, day=19, hour=10, minute=0, second=0, tzinfo=pytz.UTC)
    dateObj_4_end = datetime(year=2025, month=11, day=2, hour=14, minute=0, second=0, tzinfo=pytz.UTC)


    event_1 = Event(name='Third Coast Percussion', image='https://images.unsplash.com/photo-1570372323342-7d843e3d80ac?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description='Percussion Ensemble concert by Third Coast Percussion. Premiering new works by Philip Glass', start_time=dateObj_1, end_time=dateObj_1_end, creator_id=1, venue_id=1)

    event_2 = Event(name='Takacs Quartet', image='https://plus.unsplash.com/premium_photo-1703618159183-0e34e2304a5c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description='World renowned string quartet perfoming works by Beethoven, Mozart, Justin Beiber, and Sibelius', start_time=dateObj_2, end_time=dateObj_2_end, creator_id=2, venue_id=2)

    event_3 = Event(name='Boston Brass', image='https://images.unsplash.com/photo-1506647385858-14280cbf4438?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description="Juillard trained brass musicians perfoming Taylor Swift's entire anthology", start_time=dateObj_3, end_time=dateObj_3_end, creator_id=2, venue_id=3)

    event_4 = Event(name='Panoramic', image='https://www.niu.edu/external-programs/_images/banners/17-steel-drum-band-action-1024-dg-049.jpg', description='Steel Pan performing arts group from DeKalb Illinois. Perfoming works from their new album', start_time=dateObj_4, end_time=dateObj_4_end, creator_id=2, venue_id=4)

    event_5 = Event(name='Radiohead', image='https://images.unsplash.com/photo-1468392788711-903a924761a6?q=80&w=2687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description='Radiohead plays Huey Lewis and the News greatest hits', start_time=dateObj_1, end_time=dateObj_1_end, creator_id=1, venue_id=2)

    db.session.add_all([event_1, event_2, event_3, event_4, event_5])
    db.session.commit()

    print('adding tickets')
    ticket_1 = Ticket(price=4, user_id=1, event_id=1)
    ticket_2 = Ticket(price=2, user_id=3, event_id=1)

    db.session.add_all([ticket_1, ticket_2])
    db.session.commit()

    # Update current_total for events
    event_1.current_total = Ticket.query.filter_by(event_id=1).count()
    event_2.current_total = Ticket.query.filter_by(event_id=2).count()
    event_3.current_total = Ticket.query.filter_by(event_id=3).count()
    event_4.current_total = Ticket.query.filter_by(event_id=4).count()
    event_5.current_total = Ticket.query.filter_by(event_id=5).count()

    db.session.commit()


    print('all done')