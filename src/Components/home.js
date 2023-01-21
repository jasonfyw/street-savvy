import React from 'react'
import './home.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
import login from "./login"
export default function Home () {
	return (
		<div className='home_home'>
			<div className='Rectangle7'/>
			<div className='Rectangle4'/>
			<div className='Group3'>
				<Link to='/findaplace'>
					<div className='FindaplaceHolder'/>
				</Link>
				<span className='Findaplace'>Find a place</span>
			</div>
			<div className='footer'/>
			<div className='about'>
				<div className='Rectangle2'/>
				<span className='StreetSavvygivesyourecommendationsbasedonyourbudgetandinterestswhetheritbeforfoodshoppingorentertainmentNowyouwillneverhavetroublepickingaspotorworryaboutgoingoveryourbudget'>Street Savvy gives you recommendations based on your budget and interests, whether it be for food, <br/>shopping or entertainment. Now you will never have trouble picking a spot or worry about going over your budget!</span>
			</div>
			<img className='canada' src = {ImgAsset.home_canada} />
			<span className='NotsurewheretogoonyournextoutingSpendingtoomuchmoneywhengoingoutWegotyoucovered'>Not sure where to go on your next outing? <br/>Spending too much money when going out?<br/>We got you covered!</span>
			<span className='Toprestaurantrecommendations'>Top restaurant recommendations</span>
			<span className='Funplacestovisit'>Fun places to visit</span>
			<div className='Group1'>
				<Link to='/findaplace'>
					<div className='FindaplaceHolder_1'/>
				</Link>
				<span className='Findaplace_1'>Find a place</span>
			</div>
			<span className='Copyright2023'>Copyright © 2023 | All rights reserved</span>
			<Link to='/about'>
				<span className='About'>About</span>
			</Link>
			<span className='InputyourbudgetandreceivepersonalizedrestaurantrecommendationsinTorontofromourextensivedatabaseOuralgorithmlearnswhatrestaurantsandcuisinesyoulikeandrecommendssimilarplaces'>Input your budget and receive personalized restaurant recommendations in Toronto from our extensive database. Our algorithm learns what restaurants and cuisines you like and recommends similar places! </span>
			<img className='Rectangle5' src = {ImgAsset.home_Rectangle5} />
			<img className='Rectangle6' src = {ImgAsset.home_Rectangle6} />
			<img className='BlobShape' src = {ImgAsset.home_BlobShape} />
			<img className='BlobShape_1' src = {ImgAsset.home_BlobShape_1} />
			<img className='BlobShape_2' src = {ImgAsset.home_BlobShape_2} />
			<img className='BlobShape_3' src = {ImgAsset.home_BlobShape_3} />
			<div className='nav'>
				<login className='login'/>
				<span className='StreetSavvy'>Street Savvy</span>
				<span className='Findaplace_2'>Find a place</span>
				<span className='About_1'>About</span>
				<div className='nav_1'>
					<div className='Navbar'/>
					<login className='login_1'/>
					<span className='StreetSavvy_1'>Street Savvy</span>
					<Link to='/findaplace'>
						<span className='Findaplace_3'>Find a place</span>
					</Link>
					<Link to='/about'>
						<span className='About_2'>About</span>
					</Link>
					<span className='Profile'>Profile</span>
				</div>
			</div>
			<div className='Group2'>
				<Link to='/findaplace'>
					<div className='FindaplaceHolder_2'/>
				</Link>
				<span className='Findaplace_4'>Find a place</span>
			</div>
			<div className='Group4'>
				<Link to='/findaplace'>
					<div className='FindaplaceHolder_3'/>
				</Link>
				<span className='Findaplace_5'>Find a place</span>
			</div>
			<span className='Getstartedimmediately'>Get started immediately</span>
		</div>
	)
}