import React from 'react'
import './findaplace.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
import Property1default from "./Property1default"
import Property1default_1 from "./Property1default_1"
import Property1default_2 from "./Property1default_2"
import Property1default_3 from "./Property1default_3"
import login from "./login"
export default function Findaplace () {
	return (
		<div className='findaplace_findaplace'>
			<div className='Rectangle9'/>
			<img className='Vector' src = {ImgAsset.findaplace_Vector} />
			<img className='Vector_1' src = {ImgAsset.findaplace_Vector_1} />
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
			<Property1default className='OBForms'/>
			<img className='PeopleEatingAtRestaurant2012' src = {ImgAsset.findaplace_PeopleEatingAtRestaurant2012} />
			<Property1default_1 className='OBForms_1'/>
			<Property1default_2 className='OBForms_2'/>
			<Property1default_3 className='OBForms_3'/>
			<img className='PeopleEatingAtRestaurant2011' src = {ImgAsset.findaplace_PeopleEatingAtRestaurant2011} />
			<div className='nav'>
				<login className='login'/>
				<span className='StreetSavvy'>Street Savvy</span>
				<span className='Findaplace'>Find a place</span>
				<span className='About'>About</span>
				<div className='nav_1'>
					<div className='Navbar'/>
					<login className='login_1'/>
					<span className='StreetSavvy_1'>Street Savvy</span>
					<span className='Findaplace_1'>Find a place</span>
					<Link to='/about'>
						<span className='About_1'>About</span>
					</Link>
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
							<span className='Findaplace_3'>Find a place</span>
							<Link to='/about'>
								<span className='About_3'>About</span>
							</Link>
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