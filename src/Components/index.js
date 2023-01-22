import React from 'react'
import {Link} from 'react-router-dom'
export default function HomePage () {
    return (
	<div>
		<Link to='/home'><div>home</div></Link>
		<Link to='/about'><div>about</div></Link>
		<Link to='/findaplace'><div>findaplace</div></Link>
		<Link to='/findaplace_1'><div>findaplace_1</div></Link>
		<Link to='/findaplace_2'><div>findaplace_2</div></Link>
		<Link to='/findaplace_3'><div>findaplace_3</div></Link>
		<Link to='/findaplace_4'><div>findaplace_4</div></Link>
		<Link to='/saved'><div>saved</div></Link>
		<Link to='/card'><div>card</div></Link>
		<Link to='/reviews'><div>reviews</div></Link>
	</div>
	)
}