import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../Components/index';
import Home from '../Components/home';
import About from '../Components/about';
import Findaplace from '../Components/findaplace';
import Findaplace_1 from '../Components/findaplace_1';
import Findaplace_2 from '../Components/findaplace_2';
import Findaplace_3 from '../Components/findaplace_3';
import Findaplace_4 from '../Components/findaplace_4';
import Saved from '../Components/saved';
import Card from '../Components/card';
import Reviews from '../Components/reviews';
const RouterDOM = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/"><Home /></Route>
				<Route exact path="/about"><About /></Route>
				<Route exact path="/findaplace"><Findaplace /></Route>
				<Route exact path="/findaplace_1"><Findaplace_1 /></Route>
				<Route exact path="/findaplace_2"><Findaplace_2 /></Route>
				<Route exact path="/findaplace_3"><Findaplace_3 /></Route>
				<Route exact path="/findaplace_4"><Findaplace_4 /></Route>
				<Route exact path="/saved"><Saved /></Route>
				<Route exact path="/card"><Card /></Route>
				<Route exact path="/reviews"><Reviews /></Route>
			</Switch>
		</Router>
	);
}
export default RouterDOM;