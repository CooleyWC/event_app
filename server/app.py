from config import app
from models.users import User

@app.route('/')
@app.route('/index')
def index():
  return 'hey'

if __name__ == "__main__":
  app.run(port=5555, debug=True)
