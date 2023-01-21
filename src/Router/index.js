import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../Components/index';
import Home from '../Components/home';
import About from '../Components/about';
import Findaplace from '../Components/findaplace';
import Blank from '../Components/blank';
import Card from '../Components/card';
import Login from '../Components/login';
import Property1default from '../Components/Property1default';
import Property1default_1 from '../Components/Property1default_1';
import Property1default_2 from '../Components/Property1default_2';
import Property1default_3 from '../Components/Property1default_3';
import Property1default_4 from '../Components/Property1default_4';
import Property1default_5 from '../Components/Property1default_5';
const RouterDOM = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/"><HomePage /></Route>
				<Route exact path="/home"><Home /></Route>
				<Route exact path="/about"><About /></Route>
				<Route exact path="/findaplace"><Findaplace /></Route>
				<Route exact path="/blank"><Blank /></Route>
				<Route exact path="/card"><Card /></Route>
				<Route exact path="/login"><Login /></Route>
				<Route exact path="/property1default"><Property1default /></Route>
				<Route exact path="/property1default_1"><Property1default_1 /></Route>
				<Route exact path="/property1default_2"><Property1default_2 /></Route>
				<Route exact path="/property1default_3"><Property1default_3 /></Route>
				<Route exact path="/property1default_4"><Property1default_4 /></Route>
				<Route exact path="/property1default_5"><Property1default_5 /></Route>
			</Switch>
		</Router>
	);
}
export default RouterDOM;