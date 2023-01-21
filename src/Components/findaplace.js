import React from 'react'
import './findaplace.css'
import {Link} from 'react-router-dom'
import login from "./login"
export default function Findaplace () {
	return (
		<div className='findaplace_findaplace'>
			<div className='footer'/>
			<span className='Copyright2023'>Copyright © 2023 | All rights reserved</span>
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
					<span className='Findaplace_1'>Find a place</span>
					<Link to='/about'>
						<span className='About_1'>About</span>
					</Link>
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
						<span className='Findaplace_3'>Find a place</span>
						<Link to='/about'>
							<span className='About_3'>About</span>
						</Link>
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
						<span className='Findaplace_5'>Find a place</span>
						<Link to='/about'>
							<span className='About_5'>About</span>
						</Link>
						<span className='Profile_2'>Profile</span>
					</div>
				</div>
			</div>
			<span className='Pickyourinterest'>Pick your interest</span>
			<span className='RestaurantTableVectorsbyVecteezy'>Restaurant Table Vectors by Vecteezy</span>
			<span className='ThemeParkVectorsbyVecteezy'>Theme Park Vectors by Vecteezy</span>
			<span className='Whatwouldyouliketodotoday'>What would you like to do today?</span>
			<span className='Selectyourbudget'>Select your budget</span>
			<div className='Rectangle8'/>
			<span className='Selectyourbudget_1'>Select your budget</span>
			<div className='Group1'>
				<div className='FindaplaceHolder'/>
				<span className='Entertainment'>Entertainment</span>
			</div>
			<div className='Group1_1'>
				<div className='FindaplaceHolder_1'/>
				<span className='Food'>Food</span>
			</div>
		</div>
	)
}