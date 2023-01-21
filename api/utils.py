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



@utils.route('/utils/addBatchRestaurantsRaw', methods = ['POST'])
def addBatchRestaurantsRaw():
    data = request.json
    data = data['restaurants']

    for i in range(len(data)):
        try:
            desc = data[i].get('editorial_summary')
            if desc is not None:
                desc = desc.get('overview', '')
            else:
                desc = ''
            if data[i].get('photos', []) != []:
                photo = data[i].get('photos')[0]
                photo = photo.get('photo_reference')
            else:
                photo = ''

            db_manager.addRestaurant(
                data[i].get('formatted_address', ''),
                data[i].get('category', ''),
                desc,
                data[i].get('name', ''),
                data[i].get('formatted_phone_number', ''),
                photo,
                data[i].get('place_id', ''),
                data[i].get('price_level', ''),
                data[i].get('rating'),
                [review.get('text', '') for review in data[i].get('reviews', [])],
                data[i].get('website', '')
            )
        except KeyError:
            pass
    return jsonify({'result': 'success'}), 200
