from flask import jsonify, Blueprint, request
from random import choices, sample
from firestore import firestoreManager

recommender = Blueprint('recommender', __name__)

dbManager = firestoreManager()


@recommender.route('/recommender/getRecommendation', methods=['POST'])
def getRecommendation():
    # request.json contains:
    # category, price, preferenceConfig
    data = request.json
    candidateLocations = []
    while len(candidateLocations) == 0:
        category = data.get('category', '')
        price = data.get('price', 1)
        preferenceConfig = data.get('preferenceConfig', {})
        subcategory = choices(
            list(preferenceConfig.keys()),
            list(preferenceConfig.values())
        )

        # TODO get random sample from database
        filterConfig = {
            'category': subcategory[0],
            'priceLevel': price,
        }

        print(filterConfig)

        if category == 'restaurant':
            candidateLocationsStream = dbManager.filterRestaurant(filterConfig)
            for l in candidateLocationsStream:
                candidateLocations.append(l.to_dict())
        elif category == 'thing':
            candidateLocationsStream = dbManager.filterThingsToDo(filterConfig)
            for l in candidateLocationsStream:
                candidateLocations.append(l.to_dict())

    res = sample(candidateLocations, 1) if len(candidateLocations) > 0 else {}

    try:
        return jsonify({'location': res[0]})
    except KeyError:
        return jsonify({'location': {}})
