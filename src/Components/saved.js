import React from 'react'
import './saved.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
export default function Saved () {
	return (
		<div className='saved_saved'>
			<div className='footer'/>
			<span className='Copyright2023'>Copyright © 2023 | All rights reserved</span>
			<span className='Profile'>Profile</span>
			<span className='Saved'>Saved</span>
			<div className='Rectangle9'/>
			<span className='NameofPlace'>Name of Place</span>
			<div className='Group8'>
				<div className='Group5'>
					<img className='Ellipse1' src = {ImgAsset.saved_Ellipse1} />
					<div className='Ellipse2'/>
				</div>
				<img className='Star1' src = {ImgAsset.saved_Star1} />
				<span className='_123StreetNameONCanada'>123 Street Name, ON, Canada</span>
				<span className='_1234567890'>123 - 456 7890</span>
				<span className='wwwcompanywebsitecom'>www.companywebsite.com</span>
				<span className='_5'># / 5</span>
				<div className='Group6'>
					<img className='Line1' src = {ImgAsset.saved_Line1} />
					<img className='Line2' src = {ImgAsset.saved_Line2} />
					<img className='Line4' src = {ImgAsset.saved_Line4} />
					<img className='Line5' src = {ImgAsset.saved_Line5} />
				</div>
				<div className='Group7'>
					<img className='Line5_1' src = {ImgAsset.saved_Line5_1} />
					<img className='Line7' src = {ImgAsset.saved_Line7} />
					<img className='Line9' src = {ImgAsset.saved_Line9} />
					<img className='Line11' src = {ImgAsset.saved_Line11} />
					<img className='Line10' src = {ImgAsset.saved_Line10} />
					<img className='Line8' src = {ImgAsset.saved_Line8} />
					<img className='Line6' src = {ImgAsset.saved_Line6} />
				</div>
			</div>
			<div className='Rectangle10'/>
			<span className='ThedescriptiongoeshereLoremipsumdolorsitametconsecteturadipiscingelitseddoeiusmodtemporincididuntutlaboreetdoloremagnaaliquaUtenimadminimveniamquisnostrudexercitationullamcolaborisnisiutaliquipexeacommodoconsequatDuisauteiruredolorinreprehenderitinvoluptatevelitessecillumdoloreeufugiatnullapariaturExcepteursintoccaecatcupidatatnonproidentsuntinculpaquiofficiadeseruntmollitanimidestlaborum'>The description goes here Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
			<div className='nav'>
				<div className='Navbar'/>
				<Link to='/home'>
					<span className='StreetSavvy'>Street Savvy</span>
				</Link>
				<Link to='/findaplace'>
					<span className='Findaplace'>Find a place</span>
				</Link>
				<Link to='/about'>
					<span className='About'>About</span>
				</Link>
				<span className='Saved_1'>Saved</span>
				<div className='login'>
					<img className='_7887887426_googlegpnggooglelogowhitepng1' src = {ImgAsset.findaplace__7887887426_googlegpnggooglelogowhitepng1} />
					<span className='Login'>Log in</span>
				</div>
			</div>
		</div>
	)
}