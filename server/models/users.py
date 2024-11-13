from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.hybrid import hybrid_property
from sqlalchemy.orm import validates
import sqlalchemy as sa
import sqlalchemy.orm as so
from typing import Optional
# from models.tickets import Ticket

from config import db

class User(db.Model, SerializerMixin):
    __tablename__ = "users"
    id: so.Mapped[int] = so.mapped_column(primary_key=True)
    username: so.Mapped[str] = so.mapped_column(sa.String(64), index=True, unique=True)
    email: so.Mapped[str] = so.mapped_column(sa.String(120), index=True, unique=True)
    location: so.Mapped[str] = so.mapped_column(sa.String(120), index=True)

    password_hash: so.Mapped[Optional[str]] = so.mapped_column(sa.String(256))

    # tickets: so.Mapped["Ticket"] = so.relationship("Ticket", back_populates='users')
    tickets = db.relationship('Ticket', back_populates='user', cascade='all, delete-orphan')

    def __repr__(self):
        return '<User {}>'.format(self.username)

