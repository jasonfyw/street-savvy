import React from 'react'
import './findaplace_2.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
export default function Findaplace_2 () {
	return (
		<div className='findaplace_2_findaplace'>
			<div className='Rectangle9'/>
			<img className='Vector' src = {ImgAsset.findaplace_2_Vector} />
			<img className='Vector_1' src = {ImgAsset.findaplace_2_Vector_1} />
			<div className='footer'/>
			<span className='Copyright2023'>Copyright © 2023 | All rights reserved</span>
			<span className='Pickyourinterest'>Pick your interest</span>
			<span className='RestaurantTableVectorsbyVecteezy'>Restaurant Table Vectors by Vecteezy</span>
			<span className='ThemeParkVectorsbyVecteezy'>Theme Park Vectors by Vecteezy</span>
			<span className='Whatwouldyouliketodotoday'>What would you like to do today?</span>
			<span className='Selectyourbudget'>Select your budget</span>
			<Link to='/card'>
				<div className='Group1'>
					<div className='FindaplaceHolder'/>
					<span className='Entertainment'>Entertainment</span>
				</div>
			</Link>
			<Link to='/card'>
				<div className='Group1_1'>
					<div className='FindaplaceHolder_1'/>
					<span className='Food'>Food</span>
				</div>
			</Link>
			<img className='PeopleEatingAtRestaurant2012' src = {ImgAsset.findaplace_PeopleEatingAtRestaurant2012} />
			<img className='PeopleEatingAtRestaurant2011' src = {ImgAsset.findaplace_PeopleEatingAtRestaurant2011} />
			<img className='_' src = {ImgAsset.findaplace_2__} />
			<span className='__1'>$                      $$                   $$$                   $$$$</span>
			<div className='__2'/>
			<div className='__3'/>
			<div className='nav'>
				<div className='Navbar'/>
				<Link to='/home'>
					<span className='StreetSavvy'>Street Savvy</span>
				</Link>
				<span className='Findaplace'>Find a place</span>
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
			<div className='__4'/>
		</div>
	)
}