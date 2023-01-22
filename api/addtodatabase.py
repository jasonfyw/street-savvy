import json
from firestore import firestoreManager

f = open('api/final2.json')
data = json.load(f)

dbManager = firestoreManager()

for i in data:
    dbManager.addThingsToDo(data[i]["name"], data[i]["place_id"], data[i]["photo_reference"], data[i]["type"], data[i]["rating"], data[i]["formatted_address"],
                            data[i]["formatted_phone_number"], data[i]["reviews"], data[i]["website"], data[i]["editorial_summary"], data[i]["price_level"])
