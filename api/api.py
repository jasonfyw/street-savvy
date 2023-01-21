from flask import Flask
from flask_restful import Api, Resource, reqparse
from firestore import firestoreManager

from recommender import recommender

dbManager = firestoreManager()

# create Flask application interface
app = Flask(__name__)
api = Api(app)

addUserArg = reqparse.RequestParser()
addUserArg.add_argument(
    "email", type=str, help="add user email", required=True)


class userReg(Resource):
    def post(self, userID):
        args = addUserArg.parse_args()
        dbManager.addUser(userID, args["email"])
        return '', 202


api.add_resource(userReg, "/userreg/<string:userID>")


# register blueprint routes
app.register_blueprint(recommender)


if __name__ == "__main__":
    app.run(debug=True)
