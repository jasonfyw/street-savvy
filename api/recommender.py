from flask import jsonify, Blueprint, request
from random import choices, sample
from firestore import firestoreManager

recommender = Blueprint('recommender', __name__)

dbManager = firestoreManager()

@recommender.route('/recommender/getRecommendation', methods = ['POST'])
def getRecommendation():
    # request.json contains:
    # category, price, preferenceConfig
    data = request.json

    category = data.get('category', '')
    price = data.get('price', 1)
    preferenceConfig = data.get('preferenceConfig', {})
    subcategory = choices(
        list(preferenceConfig.keys()),
        list(preferenceConfig.values())
    )

    # TODO get random sample from database
    candidateLocations = []
    res = sample(candidateLocations, 1)

    return jsonify({ 'location': res })

