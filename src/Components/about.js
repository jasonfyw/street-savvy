import React from 'react'
import './about.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
import login from "./login"
export default function About () {
	return (
		<div className='about_about'>
			<div className='footer'/>
			<span className='Copyright2023'>Copyright © 2023 | All rights reserved</span>
			<span className='AboutUs'>About Us</span>
			<div className='about_1'>
				<span className='StreetSavvystartedoffasaUofTHacksprojectwiththethemeofexplorationThechallengesofincorporatingpersonalfinanceandusingcoherewereimplementedaswellStreetSavvyisawebsitethattakesuserinputandgivesrecommendationsbasedonabudgetandinterestswhetheritbeforfoodshoppingorentertainmentTheproblemsthatthistacklesincludesthefactthatpeopleoftenhavetroublepickingaspotordecidingwheretogoandwhattodoaswellasitstayingwithintheirbudget'>Street Savvy started off as a UofTHacks project with the theme of “exploration”. The challenges of incorporating personal finance and using co:here were implemented as well. Street Savvy is a website that takes user input and gives recommendations based on a budget and interests, whether it be for food, shopping or entertainment. The problems that this tackles includes the fact that people often have trouble picking a spot or deciding where to go and what to do as well as it staying within their budget.</span>
			</div>
			<div className='nav'>
				<login className='login'/>
				<span className='StreetSavvy'>Street Savvy</span>
				<span className='Findaplace'>Find a place</span>
				<span className='About'>About</span>
				<div className='nav_1'>
					<div className='Navbar'/>
					<login className='login_1'/>
					<Link to='/home'>
						<span className='StreetSavvy_1'>Street Savvy</span>
					</Link>
					<Link to='/findaplace'>
						<span className='Findaplace_1'>Find a place</span>
					</Link>
					<span className='About_1'>About</span>
					<span className='Profile'>Profile</span>
				</div>
				<div className='nav_2'>
					<login className='login_2'/>
					<span className='StreetSavvy_2'>Street Savvy</span>
					<span className='Findaplace_2'>Find a place</span>
					<span className='About_2'>About</span>
					<div className='nav_3'>
						<div className='Navbar_1'/>
						<login className='login_3'/>
						<Link to='/home'>
							<span className='StreetSavvy_3'>Street Savvy</span>
						</Link>
						<Link to='/findaplace'>
							<span className='Findaplace_3'>Find a place</span>
						</Link>
						<span className='About_3'>About</span>
						<span className='Profile_1'>Profile</span>
					</div>
				</div>
				<div className='nav_4'>
					<login className='login_4'/>
					<span className='StreetSavvy_4'>Street Savvy</span>
					<span className='Findaplace_4'>Find a place</span>
					<span className='About_4'>About</span>
					<div className='nav_5'>
						<div className='Navbar_2'/>
						<login className='login_5'/>
						<Link to='/home'>
							<span className='StreetSavvy_5'>Street Savvy</span>
						</Link>
						<Link to='/findaplace'>
							<span className='Findaplace_5'>Find a place</span>
						</Link>
						<span className='About_5'>About</span>
						<span className='Profile_2'>Profile</span>
					</div>
				</div>
			</div>
			<div className='Rectangle8'/>
			<img className='Vector' src = {ImgAsset.about_Vector} />
			<img className='Vector_1' src = {ImgAsset.about_Vector_1} />
		</div>
	)
}