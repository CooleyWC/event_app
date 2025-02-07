from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.hybrid import hybrid_property
from sqlalchemy.orm import validates
import sqlalchemy as sa
import sqlalchemy.orm as so
from typing import Optional
from datetime import datetime, timezone


from config import db

VALID_STATES = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 
                'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 
                'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 
                'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 
                'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY']


class Venue(db.Model, SerializerMixin):
    __tablename__ = 'venues'

    # serialize_rules = ('-user', '-event', '-ticket',)
    
    id: so.Mapped[int] = so.mapped_column(primary_key=True)
    name: so.Mapped[str] = so.mapped_column(index=True)
    street: so.Mapped[str] = so.mapped_column(index=True)
    city: so.Mapped[str] = so.mapped_column(index=True)
    state: so.Mapped[str] = so.mapped_column(index=True)
    zip: so.Mapped[int] = so.mapped_column(index=True)
    capacity: so.Mapped[int] = so.mapped_column(index=True)
    description: so.Mapped[str] = so.mapped_column(index=True)



    @validates('name')
    def validate_name(self, key, name):
        if isinstance(name, str) and (3 <=len(name) <=25):
            return name
        else:
            raise ValueError('name must be a string between 2 and 25 characters')
    

    @validates('street')
    def validate_name(self, key, street):
        if isinstance(street, str) and (2 <=len(street) <=25):
            return street
        else:
            raise ValueError('street must be a string between 2 and 25 characters')
        
    @validates('city')
    def validate_name(self, key, city):
        if isinstance(city, str) and (4 <=len(city) <=25):
            return city
        else:
            raise ValueError('city must be a string between 2 and 25 characters')
        
    @validates('state')
    def validate_name(self, key, state):
        if state not in VALID_STATES:
            raise ValueError('state must be a valid US state abbreviation')
        
    @validates('zip')
    def validate_zip(self, key, zip):

        if not isinstance(zip, int):
            raise ValueError('zip must be an integer')

        zip_str = str(zip)

        if not(len(zip_str) == 5 or len(zip_str)== 9):
            raise ValueError('zip must be 5 or 9 digits long')
        else:
            return zip
        
    @validates('capacity')
    def validate_name(self, key, capacity):
        if isinstance(capacity, int) and (3 <= capacity <=200):
            return capacity
        else:
            raise ValueError('capacity must be a number between 3 and 200')
        
    @validates('description')
    def validate_name(self, key, description):
        if isinstance(description, str) and (10 <=len(description) <=200):
            return description
        else:
            raise ValueError('description must be a string between 10 and 200 characters')

    def __repr__(self):
        return '<Venue {}>'.format(self.id)