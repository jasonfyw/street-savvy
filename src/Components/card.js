import React from 'react'
import './card.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
import login from "./login"
export default function Card () {
	return (
		<div className='card_card'>
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
						<Link to='/about'>
							<span className='About_3'>About</span>
						</Link>
						<span className='Profile_1'>Profile</span>
					</div>
				</div>
			</div>
			<div className='Rectangle9'/>
			<div className='Group5'>
				<img className='Ellipse1' src = {ImgAsset.card_Ellipse1} />
				<div className='Ellipse2'/>
			</div>
			<img className='Line1' src = {ImgAsset.card_Line1} />
			<img className='Star1' src = {ImgAsset.card_Star1} />
		</div>
	)
}