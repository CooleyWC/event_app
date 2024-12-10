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

    serialize_rules = ('-attendees', '-tickets', '-creator',)
   
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
    capacity: so.Mapped[int] = so.mapped_column(index=True)
    description: so.Mapped[str] = so.mapped_column(sa.String(300), index=True)
    creator_id: so.Mapped[int] = so.mapped_column(sa.ForeignKey('users.id'))

    venue_id: so.Mapped[int] = so.mapped_column(sa.ForeignKey('venues.id'))

    creator = db.relationship('User', back_populates='created_events')
    attendees = db.relationship('User', secondary='tickets', back_populates='events')
    tickets = db.relationship('Ticket', back_populates='event')



