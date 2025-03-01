from config import db
from flask_restful import Resource
# from flask import request
from datetime import datetime

from models.venues import Venue

def check_venue(incoming_venue):

    venue_id = incoming_venue['id']
    venue_name = incoming_venue['name']

    venue = Venue.query.filter_by(id=venue_id, name=venue_name).first()
    if(venue):
        return venue.to_dict()
    return None
