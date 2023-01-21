import React from 'react'
import './blank.css'
import {Link} from 'react-router-dom'
import login from "./login"
export default function Blank () {
	return (
		<div className='blank_blank'>
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
					<Link to='/findaplace'>
						<span className='Findaplace_1'>Find a place</span>
					</Link>
					<Link to='/about'>
						<span className='About_1'>About</span>
					</Link>
					<span className='Profile'>Profile</span>
				</div>
			</div>
		</div>
	)
}