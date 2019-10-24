import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
	return (
		<div className='container-fluid'>
			<header style={headerStyle}>
				<h1>TV SHOW LOGGER</h1>
				<div>
					<Link to='/'>
						<h3 style={h3Style}>Shows</h3>
					</Link>
					<h3 style={h3Style}>|</h3>
					<Link to='/edit'>
						<h3 style={h3Style}>Edit Shows</h3>
					</Link>
					<h3 style={h3Style}>|</h3>
					<Link to='/add'>
						<h3 style={h3Style}>Add Shows</h3>
					</Link>
				</div>
			</header>
		</div>
	);
}

const headerStyle = {
	backgroundColor: '#333',
	color: '#fff',
	padding: '10px',
	textAlign: 'center',
	width: '100%'
};

const h3Style = {
	display: 'inline-block',
	paddingRight: '30px'
};
