from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.hybrid import hybrid_property
from sqlalchemy.orm import validates
import sqlalchemy as sa
import sqlalchemy.orm as so
from typing import Optional
from datetime import datetime, timezone


from config import db

class Event(db.Model, SerializerMixin):
    __tablename__ = 'events'

    serialize_rules = ('-attendees', '-tickets', '-creator', '-venue.events',)
   
    id: so.Mapped[int] = so.mapped_column(primary_key=True)
    name: so.Mapped[str] = so.mapped_column(sa.String(64), index=True)
    created_at: so.Mapped[datetime] = so.mapped_column(
        index=True, default=lambda: datetime.now(timezone.utc)
    )
    start_time: so.Mapped[datetime] = so.mapped_column(
        index=True
    )
    end_time: so.Mapped[datetime] = so.mapped_column(
        index=True
    )

    image: so.Mapped[str] = so.mapped_column(
        sa.String(200), 
        default='https://images.unsplash.com/photo-1586299576722-e14abcdcfcb3?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')
    
    current_total: so.Mapped[int] = so.mapped_column(index=True, default=0, nullable=True)
    description: so.Mapped[str] = so.mapped_column(sa.String(300), index=True)
    creator_id: so.Mapped[int] = so.mapped_column(sa.ForeignKey('users.id'))

    venue_id: so.Mapped[int] = so.mapped_column(sa.ForeignKey('venues.id'))

    creator = db.relationship('User', back_populates='created_events')
    attendees = db.relationship('User', secondary='tickets', back_populates='events')
    tickets = db.relationship('Ticket', back_populates='event')
    venue = db.relationship('Venue', back_populates='events')


    @hybrid_property
    def capacity(self):
        return self.venue.capacity

