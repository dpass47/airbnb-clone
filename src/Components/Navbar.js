import React from 'react';
import airbnbLogo from '../Images/airbnb-logo.png';

function Navbar() {
	return (
		<div className="container">
			<header className="navbar">
				<img src={airbnbLogo} className="airbnb-logo" alt="The AirBnB Logo" />
			</header>
		</div>
	);
}

export default Navbar;
