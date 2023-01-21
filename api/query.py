from flask import jsonify, Blueprint

query = Blueprint('query', __name__)

@query.route('/queries', methods = ['GET'])
def get_all_queries():
    return jsonify({ 'result': 'hello world' })

