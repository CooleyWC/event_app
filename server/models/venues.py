from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.hybrid import hybrid_property
from sqlalchemy.orm import validates
import sqlalchemy as sa
import sqlalchemy.orm as so
from typing import Optional
from datetime import datetime, timezone


from config import db

class Venue(db.Model, SerializerMixin):
    __tablename__ = 'venues'

    # serialize_rules = ('-user', '-event', '-ticket',)
    
    id: so.Mapped[int] = so.mapped_column(primary_key=True)
    name: so.Mapped[str] = so.mapped_column(index=True)
    location: so.Mapped[str] = so.mapped_column(index=True)
    capacity: so.Mapped[int] = so.mapped_column(index=True)
    description: so.Mapped[str] = so.mapped_column(index=True)


    def __repr__(self):
        return '<Venue {}>'.format(self.id)