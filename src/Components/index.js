import React from 'react'
import {Link} from 'react-router-dom'
export default function HomePage () {
    return (
	<div>
		<Link to='/home'><div>home</div></Link>
		<Link to='/about'><div>about</div></Link>
		<Link to='/findaplace'><div>findaplace</div></Link>
		<Link to='/blank'><div>blank</div></Link>
		<Link to='/card'><div>card</div></Link>
		<Link to='/login'><div>login</div></Link>
		<Link to='/Property1default'><div>Property1default</div></Link>
		<Link to='/Property1default_1'><div>Property1default_1</div></Link>
		<Link to='/Property1default_2'><div>Property1default_2</div></Link>
		<Link to='/Property1default_3'><div>Property1default_3</div></Link>
		<Link to='/Property1default_4'><div>Property1default_4</div></Link>
		<Link to='/Property1default_5'><div>Property1default_5</div></Link>
	</div>
	)
}