import firebase_admin
from firebase_admin import firestore
from firebase_admin import credentials

cred = credentials.Certificate(
            'Credentials/travel-budget-app-5cfe4-e0104ecd7b8e.json')
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

    def addUser(self, userID, email) -> None:

        doc_ref = self.db.collection(u'Users').document(userID)
        if not doc_ref.get().exists:
            doc_ref.set({
                u'email': f'{email}',
                u'userID': f'{userID}',
                u'restaurantChoices': [],
                u'shoppingChoices': [],
                u'thingsChoices': [],
            })

    def addChoice(self, userID, choiceCat, docID):
        collection = self.db.collection(u'Users')
        query = collection.where(u'userID', u'==', userID).stream()
        for doc in query:
            collection.document(doc.id).update(
                {f'{choiceCat}': firestore.ArrayUnion([f'{docID}'])})
            # doc.update({f'{choiceCat}': firestore.ArrayUnion([f'{docID}'])})

    def addThingsChoice(self, userID, docID):
        self.addChoice(userID, 'thingsChoices', docID)

    def addRestaurantChoice(self, userID, docID):
        self.addChoice(userID, 'restauntChoices', docID)

    def addShoppingChoice(self, userID, docID):
        self.addChoice(userID, 'shoppingChocies', docID)

    def getUserData(self, userID):
        '''returns JSON format of user data
        '''
        collection = self.db.collection(u'Users')
        query = collection.where(u'userID', u'==', userID).stream()
        for doc in query:
            return doc.to_dict()

    def filterRestaurant(self, categoryDict: dict):
        collection = self.db.collection(u'Restaurants')
        for key in categoryDict:
            collection = collection.where(key, u'==', categoryDict[key])
        return collection.stream()


if __name__ == "__main__":
    dbManager = firestoreManager()
    iter = dbManager.filterRestaurant(
        {'category': 'american', 'name': "Johnny G's Cafe"})
    for i in iter:
        print(i.to_dict())
