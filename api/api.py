from flask import Flask

from recommender import recommender
from utils import utils

# create Flask application interface
app = Flask(__name__)

# register blueprint routes
app.register_blueprint(recommender)
app.register_blueprint(utils)