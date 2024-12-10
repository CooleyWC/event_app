from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.hybrid import hybrid_property
from sqlalchemy.orm import validates
import sqlalchemy as sa
import sqlalchemy.orm as so
from typing import Optional
from datetime import datetime, timezone
# from models.users import User

from config import db

class Ticket(db.Model, SerializerMixin):
    __tablename__ = 'tickets'

    serialize_rules = ('-user', '-event',)
    
    id: so.Mapped[int] = so.mapped_column(primary_key=True)
    purchase_date: so.Mapped[datetime] = so.mapped_column(
        index=True, default=lambda: datetime.now(timezone.utc)
    )
    price: so.Mapped[int] = so.mapped_column(index=True)
    user_id: so.Mapped[int] = so.mapped_column(sa.ForeignKey('users.id'),
                                               index=True)
    event_id: so.Mapped[int] = so.mapped_column(sa.ForeignKey('events.id'),
                                                index=True)
    user = db.relationship('User', back_populates='tickets')
    event = db.relationship('Event', back_populates='tickets')

    def __repr__(self):
        return '<Ticket {}>'.format(self.id)