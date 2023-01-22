from flask import jsonify, Blueprint, request
from firestore import firestoreManager
from dotenv import dotenv_values
import cohere  
import pandas as pd

config = dotenv_values(".env")

co = cohere.Client(config['COHERE_API_KEY'])

prompt = '''"Loved their fried spring rolls, so crispy so good! The beef pho has a very clear broth and is lightly seasoned. Some may find it bland but I like it. Not the friendliest staff there but service was extremely fast, we got our dishes probably 5mins after ordering. It's just a china town staple, recommend! Cash only."
In summary: "The reviewer recommends the restaurant for its crispy fried spring rolls and clear broth beef pho, but notes that it's cash only and the staff is not particularly friendly."
"Every time when We visit China town, we will eat in this restaurant. Very consistent food quality for so many years. The noodle soup is always with strong and tasty soup base. Very good spring roll and rice paper wrap!"
In summary:"The reviewer visits this Chinatown restaurant every time they're in the area and praises it for its consistent, tasty noodle soup and good spring roll and rice paper wrap."
"The reviewer doesn't like that this restaurant only accepts cash, which they believe is used to evade taxes and notes that prices are the same or higher than other Vietnamese restaurants in the area. They also mention that service is average and the owner is not friendly, the food is just okay, and the tips given by customers go directly to the owner rather than to the employees who are paid less than minimum wage."
In summary:"The reviewer notes that this restaurant only accepts cash, which they believe is used to evade taxes, and that the food, service, and owner are not great, also the tips are not given to the employees."
"Nice place for breakfast, service was quick and friendly. Food portions were decent. The fresh fruit wasn't the freshest on the pancakes. But other than that amazing food. Would highly recommand this place"
In summary:"The reviewer recommends this place for breakfast, praising the service and decent food portions, but noting that the fresh fruit on the pancakes was not the freshest."
"This is a great pub. Multiple bars in same building with different themes as live music, dance floor. Great crowd. Very busy on weekends. Food is delicious for bar food. Cocktails are delicious too. Not very expensive either. Highly recommend if you want to enjoy loud music and young crowd."
In summary:"The reviewer recommends this pub for its multiple bars, delicious bar food and cocktails, and great crowd, noting that it can be busy on weekends."
"Very nice staff, proffesional and cooperative. They serve authentic Italian pizza as well as authentic sicillian style pizza. The toppings are generous. The dough is superb and don't even get me started on the sause, it's superb. Highly recommended, especially during winter cause they have speedy delivery. Must try"
In summary:"The reviewer highly recommends this restaurant for its authentic pizzas with superb dough and sauce and friendly staff with speedy delivery, especially during winter."
"{}"
In summary:"'''


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


@utils.route('/utils/addBatchRestaurantsRawSummarise', methods = ['POST'])
def addBatchRestaurantsRawSummarise():
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

            reviews = []
            for review in [review.get('text', '') for review in data[i].get('reviews', [])]:
                n_generations = 5
                prediction = co.generate(
                    model='xlarge',
                    prompt=prompt.format(review),
                    return_likelihoods = 'GENERATION',
                    stop_sequences=['"'],
                    max_tokens=50,
                    temperature=0.7,
                    num_generations=n_generations,
                    k=0,
                    p=0.75)


                gens = []
                likelihoods = []
                for gen in prediction.generations:
                    gens.append(gen.text)
                    sum_likelihood = 0
                    for t in gen.token_likelihoods:
                        sum_likelihood += t.likelihood
                    # Get sum of likelihoods
                    likelihoods.append(sum_likelihood)


                pd.options.display.max_colwidth = 200
                # Create a dataframe for the generated sentences and their likelihood scores
                df = pd.DataFrame({'generation':gens, 'likelihood': likelihoods})
                # Drop duplicates
                df = df.drop_duplicates(subset=['generation'])
                # Sort by highest sum likelihood
                df = df.sort_values('likelihood', ascending=False, ignore_index=True)
                reviews.append(df.iloc[0][0])

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
                reviews,
                data[i].get('website', '')
            )
        except KeyError:
            pass
    return jsonify({'result': 'success'}), 200
