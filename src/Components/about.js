import React from 'react'
import './about.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
export default function About () {
	return (
		<div className='about_about'>
			<div className='footer'/>
			<span className='Copyright2023'>Copyright © 2023 | All rights reserved</span>
			<span className='AboutUs'>About Us</span>
			<div className='about_1'>
				<span className='StreetSavvystartedoffasaUofTHacksprojectwiththethemeofexplorationThechallengesofincorporatingpersonalfinanceandusingcoherewereimplementedaswellStreetSavvyisawebsitethattakesuserinputandgivesrecommendationsbasedonabudgetandinterestswhetheritbeforfoodshoppingorentertainmentTheproblemsthatthistacklesincludesthefactthatpeopleoftenhavetroublepickingaspotordecidingwheretogoandwhattodoaswellasitstayingwithintheirbudgetFrontendDesignFigmaLanguageframeworkReactJSandChakraUIBackendLanguageframeworkPythonandFlaskDatabaseMongoDBOthertoolsCohereGoogleMapsAPI'>Street Savvy started off as a UofTHacks project with the theme of “exploration”. The challenges of incorporating personal finance and using co:here were implemented as well. Street Savvy is a website that takes user input and gives recommendations based on a budget and interests, whether it be for food, shopping or entertainment. The problems that this tackles includes the fact that people often have trouble picking a spot or deciding where to go and what to do as well as it staying within their budget.<br/><br/><br/><br/><br/>Frontend:<br/>Design: Figma<br/>Language/framework: ReactJS and ChakraUI<br/>Backend:<br/>Language/framework: Python and Flask<br/>Database: MongoDB<br/>Other tools: Cohere, Google Maps API</span>
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
			<span className='ProjectCreators'>Project Creators</span><div className='Ellipse4' style={{backgroundImage: `url(${ImgAsset.about_Ellipse4})`}}/><div className='Ellipse5' style={{backgroundImage: `url(${ImgAsset.about_Ellipse5})`}}/>
			<img className='Ellipse6' src = {ImgAsset.about_Ellipse6} /><div className='Ellipse7' style={{backgroundImage: `url(${ImgAsset.about_Ellipse7})`}}/>
			<span className='ToolsUsed'>Tools Used</span>
			<div className='nav'>
				<div className='Navbar'/>
				<Link to='/home'>
					<span className='StreetSavvy'>Street Savvy</span>
				</Link>
				<Link to='/findaplace'>
					<span className='Findaplace'>Find a place</span>
				</Link>
				<span className='About'>About</span>
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