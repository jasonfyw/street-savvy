import React from 'react'
import './reviews.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
export default function Reviews () {
	return (
		<div className='reviews_reviews'>
			<img className='Vector' src = {ImgAsset.reviews_Vector} />
			<img className='Vector_1' src = {ImgAsset.reviews_Vector_1} />
			<div className='Rectangle9'/>
			<div className='footer'/>
			<span className='Copyright2023'>Copyright © 2023 | All rights reserved</span>
			<div className='Rectangle9_1'/>
			<span className='NameofPlace'>Name of Place</span>
			<div className='Group8'>
				<div className='Group5'>
					<img className='Ellipse1' src = {ImgAsset.reviews_Ellipse1} />
					<div className='Ellipse2'/>
				</div>
				<img className='Star1' src = {ImgAsset.reviews_Star1} />
				<span className='_123StreetNameONCanada'>123 Street Name, ON, Canada</span>
				<span className='_1234567890'>123 - 456 7890</span>
				<span className='wwwcompanywebsitecom'>www.companywebsite.com</span>
				<span className='_5'># / 5</span>
				<div className='Group6'>
					<img className='Line1' src = {ImgAsset.reviews_Line1} />
					<img className='Line2' src = {ImgAsset.reviews_Line2} />
					<img className='Line4' src = {ImgAsset.reviews_Line4} />
					<img className='Line5' src = {ImgAsset.reviews_Line5} />
				</div>
				<div className='Group7'>
					<img className='Line5_1' src = {ImgAsset.reviews_Line5_1} />
					<img className='Line7' src = {ImgAsset.reviews_Line7} />
					<img className='Line9' src = {ImgAsset.reviews_Line9} />
					<img className='Line11' src = {ImgAsset.reviews_Line11} />
					<img className='Line10' src = {ImgAsset.reviews_Line10} />
					<img className='Line8' src = {ImgAsset.reviews_Line8} />
					<img className='Line6' src = {ImgAsset.reviews_Line6} />
				</div>
			</div>
			<div className='Rectangle10'/>
			<span className='ThedescriptiongoeshereLoremipsumdolorsitametconsecteturadipiscingelitseddoeiusmodtemporincididuntutlaboreetdoloremagnaaliquaUtenimadminimveniamquisnostrudexercitationullamcolaborisnisiutaliquipexeacommodoconsequatDuisauteiruredolorinreprehenderitinvoluptatevelitessecillumdoloreeufugiatnullapariaturExcepteursintoccaecatcupidatatnonproidentsuntinculpaquiofficiadeseruntmollitanimidestlaborum'>The description goes here Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
			<span className='ThereviewsgoeshereLoremipsumdolorsitametconsecteturadipiscingelitseddoeiusmodtemporincididuntutlaboreetdoloremagnaaliquaUtenimadminimveniamquisnostrudexercitationullamcolaborisnisiutaliquipexeacommodoconsequat'>The reviews goes here Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </span>
			<div className='Group1'>
				<div className='FindaplaceHolder'/>
				<span className='Save'>Save</span>
			</div>
			<div className='Group9'>
				<div className='FindaplaceHolder_1'/>
				<span className='Skip'>Skip</span>
			</div>
			<span className='Reviews'>Reviews</span>
			<div className='nav'>
				<div className='Navbar'/>
				<span className='StreetSavvy'>Street Savvy</span>
				<Link to='/findaplace'>
					<span className='Findaplace'>Find a place</span>
				</Link>
				<Link to='/about'>
					<span className='About'>About</span>
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