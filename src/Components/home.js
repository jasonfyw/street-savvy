import React from 'react';
import './home.css';
import ImgAsset from '../public';
import { Link } from 'react-router-dom';
export default function Home() {
	return (
		<div id="mainpage">
			<div id="section">
				<div className="blurb">
					Not sure where to go on your next outing? <br />
					Spending too much money when going out?
					<br />
					We got you covered!
				</div>
				<div className="solution">
					Street Savvy gives you recommendations based on your budget and
					interests, whether it be for food, <br />
					shopping or entertainment. Now you will never have trouble picking a
					spot or worry about going over your budget!
				</div>
				<div className="buttondiv">
					<button className="button-56" role="button">Find a place!</button>
				</div>
				<div id="canadadiv">
					<img className="canada" src={ImgAsset.home_canada} />
				</div>
			</div>
		</div>
	);
}
