# Street Savvy

A web app that suggests places to visit in Toronto based on your preferences. Submitted to UofTHacks X.

Frontend:
- ReactJS (Typescript)
- ChakraUI

Backend:
- Python with Flask
- Firestore
- Google Places API
- Cohere API

### User installation
Clone the repository in a directory of your choosing:
```bash
$ git clone https://github.com/jasonfyw/street-savvy
```
Change directory into the cloned repository:
```bash
$ cd street-savvy
```
Then, install the JS dependencies from `package.json` using `npm`:
```bash
$ npm install
```
Using "npm" install Firebase
```bash
$ npm install firebase
```
Now, change into the `api` directory to set up and enter a virtual Python environment using `venv`:
```bash
$ cd api
$ python3 -m venv venv
$ source venv/bin/activate
```
We can now safely install the Python dependencies and run the scripts properly. Using `requirements.txt`, we can do this pretty painlessly (although it might take a few minutes):
``` bash
$ pip install -r ../requirements.txt
```
Then, assuming you have a Firestore instance already set up, fill in your credentials in `src/firebase.ts` and `api/Credentials/travel-budget-app-5cfe4-e0104ecd7b8e.json`.

Then, to set up the Google Places API, navigate to the root directory and create another `.env` file with the following:
```
REACT_APP_GOOGLE_PLACES_API_KEY=your_api_key
```




## Usage
You're now able to launch the web app! In the command line, start the backend API on your machine by running:
```
$ npm run start-api
```
Then, open another terminal prompt and navigate to the repository. Then, launch the ReactJS frontend by running:
```
$ npm start
```
You should now be able to access the web app at `http://localhost:3000`. It is also possible to access it from across your local network, however, adjustments need to be made to the API.
