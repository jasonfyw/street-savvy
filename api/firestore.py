import firebase_admin
from firebase_admin import firestore
from firebase_admin import credentials


class firestoreManager:
    def __init__(self) -> None:
        self.cred = credentials.Certificate(
            'Credentials/travel-budget-app-5cfe4-e0104ecd7b8e.json')
        self.app = firebase_admin.initialize_app(self.cred)
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
        doc_ref = self.db.collection(u'Users').document()
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
            return doc.data


if __name__ == "__main__":
    dbManager = firestoreManager()
    # dbManager.addRestaurant("class test 1", "italian", "test for OOP", "$$$$")
    # dbManager.addUser("testuser", "test@test.ca")
    dbManager.addThingsToDo('testuser', '1231515151')
