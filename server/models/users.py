from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.hybrid import hybrid_property
from sqlalchemy.orm import validates
import sqlalchemy as sa
import sqlalchemy.orm as so
from typing import Optional
# from models.tickets import Ticket

from config import db, bcrypt

class User(db.Model, SerializerMixin):
    __tablename__ = "users"

    serialize_rules = ('-_password_hash', '-events', '-tickets.user',)

    id: so.Mapped[int] = so.mapped_column(primary_key=True)
    first_name: so.Mapped[str] = so.mapped_column(sa.String(32), index=True, unique=True)
    last_name: so.Mapped[str] = so.mapped_column(sa.String(32), index=True, unique=True)
    email: so.Mapped[str] = so.mapped_column(sa.String(120), index=True, unique=True)
    location: so.Mapped[str] = so.mapped_column(sa.String(120), index=True)

    _password_hash: so.Mapped[Optional[str]] = so.mapped_column(sa.String(256))

    @hybrid_property
    def password_hash(self):
        raise AttributeError('password is not viewable')
    
    @password_hash.setter
    def password_hash(self, password):
        password_hash=bcrypt.generate_password_hash(
            password.encode('utf-8')
        )
        self._password_hash = password_hash.decode('utf-8')
    
    def authenticate(self, password):
        return bcrypt.check_password_hash(
            self._password_hash, password.encode('utf-8')
        )

    # tickets: so.Mapped["Ticket"] = so.relationship("Ticket", back_populates='users')
    tickets = db.relationship('Ticket', back_populates='user', cascade='all, delete-orphan')
    events = db.relationship('Event', secondary='tickets', back_populates='attendees')

    created_events = db.relationship('Event', back_populates='creator')

    @validates('first_name')
    def validate_first_name(self, key, first_name):
        if isinstance(first_name, str) and (2 <= len(first_name) <= 15):
            return first_name
        else:
            raise ValueError('First name must be a string and between 2 and 15 characters')
        
    @validates('last_name')
    def validate_last_name(self, key, last_name):
        if isinstance(last_name, str) and (2 <= len(last_name) <= 15):
            return last_name
        else:
            raise ValueError('First name must be a string and between 2 and 15 characters')

    @validates('email')
    def validate_email(self, key, address):
        if '@' not in address:
            raise ValueError('Invalid Email input/format')
        return address
    
    @validates('location')
    def validate_location(self, key, location):
        if isinstance(location, str) and (3 <= len(location) <=20):
            return location
        else:
            raise ValueError('Location must be a string and between 3 and 20 characters')


    def __repr__(self):
        return '<User {}>'.format(self.first_name)

