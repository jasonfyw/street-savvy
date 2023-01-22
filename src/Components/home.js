import React from 'react'
import './home.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
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
			<span className='About'>About</span>
			<span className='InputyourbudgetandreceivepersonalizedrestaurantrecommendationsinTorontofromourextensivedatabaseofover700restuarantsOuralgorithmlearnswhatrestaurantsandcuisinesyoulikeandrecommendssimilarplaces'>Input your budget and receive personalized restaurant recommendations in Toronto from our extensive database of over 700 restuarants. Our algorithm learns what restaurants and cuisines you like and recommends similar places! </span>
			<img className='Rectangle5' src = {ImgAsset.home_Rectangle5} />
			<img className='Rectangle6' src = {ImgAsset.home_Rectangle6} />
			<img className='BlobShape' src = {ImgAsset.home_BlobShape} />
			<img className='BlobShape_1' src = {ImgAsset.home_BlobShape_1} />
			<img className='BlobShape_2' src = {ImgAsset.home_BlobShape_2} />
			<img className='BlobShape_3' src = {ImgAsset.home_BlobShape_3} />
			<div className='Group2'>
				<Link to='/findaplace'>
					<div className='FindaplaceHolder_2'/>
				</Link>
				<span className='Findaplace_2'>Find a place</span>
			</div>
			<div className='Group4'>
				<Link to='/findaplace'>
					<div className='FindaplaceHolder_3'/>
				</Link>
				<span className='Findaplace_3'>Find a place</span>
			</div>
			<span className='Getstartedimmediately'>Get started immediately</span>
			<span className='InputyourbudgetandreceivepersonalizedrecommendationsonplacestovisitandthingstodoalloverTorontoOuralgorithmlearnsyourpreferencesandgivesrecommendationstailoredtoyou'>Input your budget and receive personalized recommendations on places to visit and things to do all over Toronto! Our algorithm learns your preferences and gives recommendations tailored to you.</span>
			<img className='Vector' src = {ImgAsset.home_Vector} />
			<img className='Vector_1' src = {ImgAsset.home_Vector_1} />
			<img className='Vector_2' src = {ImgAsset.home_Vector_2} />
			<img className='Vector_3' src = {ImgAsset.home_Vector_3} />
			<div className='nav'>
				<div className='Navbar'/>
				<span className='StreetSavvy'>Street Savvy</span>
				<Link to='/findaplace'>
					<span className='Findaplace_4'>Find a place</span>
				</Link>
				<Link to='/about'>
					<span className='About_1'>About</span>
				</Link>
				<Link to='/saved'>
					<span className='Saved'>Saved</span>
				</Link>
				<div className='login'>
					<img className='_7887887426_googlegpnggooglelogowhitepng1' src = {ImgAsset.findaplace__7887887426_googlegpnggooglelogowhitepng1} />
					<span className='Login'>Log in</span>
				</div>
			</div>
		</div>
	)
}