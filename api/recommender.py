from flask import jsonify, Blueprint

recommender = Blueprint('recommender', __name__)

@recommender.route('/', methods = ['GET'])
def get_all_queries():
    return jsonify({ 'result': 'hello world' })

