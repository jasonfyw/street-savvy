import json
import random

with open('data/all_restaurants_details.json', 'r') as f:
    data = json.load(f)

res = []

for _ in range(20):
    poi = random.sample(data, 1)
    try:
        print(poi[0]['name'])
        print(poi[0]['editorial_summary'])
        category = input('Category: ')
        poi[0]['category'] = category
        res += poi
    except KeyError:
        pass

with open('data/all_restaurants_details_labelled.json', 'r') as f:
    prev_data = json.load(f)
with open('data/all_restaurants_details_labelled.json', 'w') as f:
    new_data = prev_data + res
    json.dump(new_data, f)


CATEGORIES = [
    'african',
    'american',
    'asian',
    'chinese',
    'european',
    'french',
    'hamburgers',
    'healthy',
    'italian',
    'japanese',
    'korean',
    'mediterranean',
    'mexican',
    'thai',
    'dessert',
    'coffee',
    'drinks'
]