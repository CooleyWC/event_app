# Parlor Stages

An Event Management Appliction.

## Usage

- npm install
- pipenv install && pipenv shell
- _to setup the database:_
- flask db init
- flask migrate -m _'comment'_
- flask db upgrade
- _to seed the database:_
- python seed.py
- _to run the application:_
- cd into the server then run python app.py
- in another terminal run: npm run dev --prefix client