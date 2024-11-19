from config import db
from flask import request, session
from flask_restful import Resource

from models.users import User

class Login(Resource):
    def post(self):
        try:
            email=request.get_json()['email']
         
            user=User.query.filter(User.email==email).first()
        
            password=request.get_json()['password']
       
            if not user:
                print('not user ran')
                error={"error": "User does not exist - Please create an account."}
                return error, 400
            if user.authenticate(password):
                print('authenticate ran')
                session['user_id'] = user.id
                return user.to_dict(), 200
            else:
                print('incorrect password ran')
                error={"error": "Incorrect password"}
                return error, 401
        except:
            error={"error": "Error loggin in - Make sure to enter valid input"}
            return error, 401
        

