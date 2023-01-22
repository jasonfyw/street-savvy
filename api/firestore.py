import firebase_admin
from firebase_admin import firestore
from firebase_admin import credentials

cred = credentials.Certificate(
    'api/Credentials/travel-budget-app-5cfe4-e0104ecd7b8e.json')
app = firebase_admin.initialize_app(cred)


class firestoreManager:
    def __init__(self) -> None:
        self.db = firestore.client()

    def addRestaurant(self, address, category, description, name, phoneNumber, photoAPI, placeID, priceLevel, rating, reviews, website) -> None:
        doc_ref = self.db.collection(u'Restaurants').document()

        doc_ref.set({
            u'address': address,
            u'category': category,
            u'description': description,
            u'docID': doc_ref.id,
            u'name': name,
            u'phoneNumber': phoneNumber,
            u'photoAPI': photoAPI,
            u'placeID': placeID,
            u'priceLevel': priceLevel,
            u'rating': rating,
            u'reviews': reviews,
            u'website': website
        })

    def addThingsToDo(self, name, placeID, photoAPI, category, rating, address, phoneNumber, reviews, website, description, priceLevel):
        doc_ref = self.db.collection(u'ThingsToDo').document()
        doc_ref.set({
            u'name': name,
            u'placeID': placeID,
            u'photoAPI': photoAPI,
            u'category': category,
            u'rating': rating,
            u'address': address,
            u'phoneNumber': phoneNumber,
            u'reviews': reviews,
            u'website': website,
            u'description': description,
            u'priceLevel': priceLevel
        })

    def addUser(self, userID, email) -> None:

        doc_ref = self.db.collection(u'Users').document(userID)
        if not doc_ref.get().exists:
            doc_ref.set({
                u'email': f'{email}',
                u'userID': f'{userID}',
                u'restaurantChoices': [],
                u'thingsChoices': [],
            })

    def addChoice(self, userID, choiceCat, docID):
        collection = self.db.collection(u'Users').document(userID)
        collection.update(
            {f'{choiceCat}': firestore.ArrayUnion([docID])})
        # doc.update({f'{choiceCat}': firestore.ArrayUnion([f'{docID}'])})

    def addThingsChoice(self, userID, docID):
        self.addChoice(userID, 'thingsChoices', docID)

    def addRestaurantChoice(self, userID, docID):
        self.addChoice(userID, 'restaurantChoices', docID)

    def clearChoices(self, userID, choiceCat):
        collection = self.db.collection(u'Users').document(userID)
        collection.update({
            choiceCat: firestore.DELETE_FIELD
        })
        collection.update({
            choiceCat: []
        })

    def getUserData(self, userID):
        '''returns JSON format of user data
        '''
        doc = self.db.collection(u'Users').document(userID).get()
        return doc.to_dict()

    def filterRestaurant(self, categoryDict: dict):
        collection = self.db.collection(u'Restaurants')
        for key in categoryDict:
            collection = collection.where(key, u'==', categoryDict[key])
        return collection.stream()

    def filterThingsToDo(self, categoryDict: dict):
        collection = self.db.collection("ThingsToDo")
        for key in categoryDict:
            collection = collection.where(key, u'==', categoryDict[key])
        return collection.stream()


if __name__ == "__main__":
    dbManager = firestoreManager()
    iter = dbManager.filterThingsToDo({'category': 'night_club'})
    for i in iter:
        print(i.to_dict()["rating"])
