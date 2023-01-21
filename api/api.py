from flask import Flask

from recommender import recommender

# create Flask application interface
app = Flask(__name__)

# register blueprint routes
app.register_blueprint(recommender)