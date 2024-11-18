from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.hybrid import hybrid_property
from sqlalchemy.orm import validates
import sqlalchemy as sa
import sqlalchemy.orm as so
from typing import Optional
from werkzeug.security import generate_password_hash, check_password_hash
# from models.tickets import Ticket

from config import db

class User(db.Model, SerializerMixin):
    __tablename__ = "users"

    serialize_rules = ('-password_hash', '-events', '-tickets.user',)
    # serialize_rules = ('-password_hash', '-tickets.user', '-events', '-tickets')

    id: so.Mapped[int] = so.mapped_column(primary_key=True)
    username: so.Mapped[str] = so.mapped_column(sa.String(64), index=True, unique=True)
    email: so.Mapped[str] = so.mapped_column(sa.String(120), index=True, unique=True)
    location: so.Mapped[str] = so.mapped_column(sa.String(120), index=True)

    password_hash: so.Mapped[Optional[str]] = so.mapped_column(sa.String(256))

    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)

    # tickets: so.Mapped["Ticket"] = so.relationship("Ticket", back_populates='users')
    tickets = db.relationship('Ticket', back_populates='user', cascade='all, delete-orphan')
    events = db.relationship('Event', secondary='tickets', back_populates='attendees')

    created_events = db.relationship('Event', back_populates='creator')


    def __repr__(self):
        return '<User {}>'.format(self.username)

