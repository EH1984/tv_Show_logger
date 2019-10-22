import React from 'react';

export default function Header() {
	return (
		<div className='container-fluid'>
			<header style={headerStyle}>
				<h1>TV SHOW LOGGER</h1>
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
