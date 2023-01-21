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
				<span className='StreetSavvystartedoffasaUofTHacksprojectwiththethemeofexplorationThechallengesofincorporatingpersonalfinanceandusingcoherewereimplementedaswellStreetSavvyisawebsitethattakesuserinputandgivesrecommendationsbasedonabudgetandinterestswhetheritbeforfoodshoppingorentertainmentTheproblemsthatthistacklesincludesthefactthatpeopleoftenhavetroublepickingaspotordecidingwheretogoandwhattodoaswellasitstayingwithintheirbudgetToolsusedFrontendDesignFigmaLanguageframeworkReactJSandChakraUIBackendLanguageframeworkPythonandFlaskDatabaseMongoDBOthertoolsCohereGoogleMapsAPI'>Street Savvy started off as a UofTHacks project with the theme of “exploration”. The challenges of incorporating personal finance and using co:here were implemented as well. Street Savvy is a website that takes user input and gives recommendations based on a budget and interests, whether it be for food, shopping or entertainment. The problems that this tackles includes the fact that people often have trouble picking a spot or deciding where to go and what to do as well as it staying within their budget.<br/><br/><br/><br/>Tools used:<br/>Frontend:<br/>Design: Figma<br/>Language/framework: ReactJS and ChakraUI<br/>Backend:<br/>Language/framework: Python and Flask<br/>Database: MongoDB<br/>Other tools: Cohere, Google Maps API</span>
			</div>
			<div className='about_2'>
				<span className='Jason'>Jason </span>
			</div>
			<div className='about_3'>
				<span className='Inaas'>Inaas</span>
			</div>
			<div className='about_4'>
				<span className='Nathan'>Nathan</span>
			</div>
			<div className='about_5'>
				<span className='Zoha'>Zoha</span>
			</div>
			<div className='Rectangle8'/>
			<img className='Vector' src = {ImgAsset.about_Vector} />
			<img className='Vector_1' src = {ImgAsset.about_Vector_1} />
			<span className='ProjectCreators'>Project Creators</span>
			<div className='Ellipse4'/>
			<div className='Ellipse5'/>
			<div className='Ellipse6'/>
			<div className='Ellipse7'/>
			<span className='ToolsUsed'>Tools Used</span>
			<div className='nav'>
				<login className='login'/>
				<span className='StreetSavvy'>Street Savvy</span>
				<span className='Findaplace'>Find a place</span>
				<span className='About'>About</span>
				<div className='nav_1'>
					<div className='Navbar'/>
					<login className='login_1'/>
					<span className='StreetSavvy_1'>Street Savvy</span>
					<Link to='/findaplace'>
						<span className='Findaplace_1'>Find a place</span>
					</Link>
					<span className='About_1'>About</span>
					<Link to='/saved'>
						<span className='Profile'>Profile</span>
					</Link>
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
							<Link to='/saved'>
								<span className='Saved'>Saved</span>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}