from config import app, api, db
from flask_restful import Resource
from flask import request, session

from models.venues import Venue

class VenueByID(Resource):
    def get(self, id):
        try:
            venue = Venue.query.filter(Venue.id == id).first()
            venue_dict = venue.to_dict()
            return venue_dict, 200
        except:
            error = {'error': 'problem getting rental: {id}'}
            return error, 400
    
    def delete(self, id):
        try:
            venue = Venue.query.filter(Venue.id == id).first()

            db.session.delete(venue)
            db.session.commit()

            return {'success-message': 'the venue {id} was successfully deleted'}, 200
        except:
            error = {'error': 'problem deleting venue: {id}'}
            return error, 422