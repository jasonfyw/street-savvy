import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../Components/index';
import Home from '../Components/home';
import About from '../Components/about';
import Findaplace from '../Components/findaplace';
import Saved from '../Components/saved';
import Card from '../Components/card';
import Reviews from '../Components/reviews';
import Login from '../Components/login';
import Property1default from '../Components/Property1default';
import Property1default_1 from '../Components/Property1default_1';
import Property1default_2 from '../Components/Property1default_2';
import Property1default_3 from '../Components/Property1default_3';
const RouterDOM = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/"><Home /></Route>
				<Route exact path="/about"><About /></Route>
				<Route exact path="/findaplace"><Findaplace /></Route>
				<Route exact path="/saved"><Saved /></Route>
				<Route exact path="/card"><Card /></Route>
				<Route exact path="/reviews"><Reviews /></Route>
				<Route exact path="/login"><Login /></Route>
				<Route exact path="/property1default"><Property1default /></Route>
				<Route exact path="/property1default_1"><Property1default_1 /></Route>
				<Route exact path="/property1default_2"><Property1default_2 /></Route>
				<Route exact path="/property1default_3"><Property1default_3 /></Route>
			</Switch>
		</Router>
	);
}
export default RouterDOM;