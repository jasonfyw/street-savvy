from flask import jsonify, Blueprint, request
from firestore import firestoreManager

utils = Blueprint('utils', __name__)

db_manager = firestoreManager()

@utils.route('/utils/addRestaurant', methods = ['POST'])
def addRestaurant():
    data = request.json
    try:
        db_manager.addRestaurant(
            data['address'],
            data['category'],
            data['description'],
            data['name'],
            data['phoneNumber'],
            data['photoRef'],
            data['placeID'],
            data['priceLevel'],
            data['rating'],
            data['reviews'],
            data['website']
        )
        return jsonify({'result': 'success'}), 200
    except KeyError:
        return jsonify({'result': 'invalid restaurant format'}), 400

