from config import db
from flask_restful import Resource
from models.venues import Venue
from flask import request, session

class Venues(Resource):
    def get(self):

        venues = [venue.to_dict() for venue in Venue.query.all()]
        
        return venues, 200
    
    def post(self):

        json = request.get_json()

        try:

            print('the json', json)
            venue = Venue(
                name = json.get('name'),
                street = json.get('street'),
                city = json.get('city'),
                state = json.get('state'),
                zip = int(json.get('zip')),
                capacity = int(json.get('capacity')),
                description = json.get('description'),

            )

            db.session.add(venue)
            db.session.commit()

            venue_dict = venue.to_dict()

            print(venue_dict)

            return venue_dict, 201
        
        except:
            error={'error': 'there was an error adding this venue'}
            return error, 422