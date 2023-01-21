# travel-budget-app

### User installation
Clone the repository in a directory of your choosing:
```
$ git clone https://github.com/jasonfyw/travel-budget-app.git
```
Change directory into the cloned repository:
```
$ cd travel-budget-app
```
Then, install the JS dependencies from `package.json` using `npm`:
```
$ npm install
```
Now, change into the `api` directory to set up and enter a virtual Python environment using `venv`:
```
$ cd api
$ python3 -m venv venv
$ source venv/bin/activate
```
We can now safely install the Python dependencies and run the scripts properly. Using `requirements.txt`, we can do this pretty painlessly (although it might take a few minutes):
``` 
$ pip install -r ../requirements.txt
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