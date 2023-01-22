from flask import Flask
from flask_restful import Api, Resource, reqparse
from flask_cors import CORS
from firestore import firestoreManager

from recommender import recommender
from utils import utils

dbManager = firestoreManager()

config={
    'ORIGINS': [
        'http://localhost:3000'
    ]
}

# create Flask application interface
app = Flask(__name__)
cors = CORS(app, resources={ r'/*': {'origins': config['ORIGINS']}}, supports_credentials=True)
api = Api(app)

addUserArg = reqparse.RequestParser()
addUserArg.add_argument(
    "email", type=str, help="add user email", required=True)


class userReg(Resource):
    def post(self, userID):
        args = addUserArg.parse_args()
        dbManager.addUser(userID, args["email"])
        return '', 202

    def get(self, userID):
        return dbManager.getUserData(userID)


api.add_resource(userReg, "/userreg/<string:userID>")


# register blueprint routes
app.register_blueprint(recommender)
app.register_blueprint(utils)

if __name__ == "__main__":
    app.run(debug=True)
