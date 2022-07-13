import React from 'react';

import photoGrid from '../Images/photo-grid.png';

function Hero() {
	return (
		<div className="container">
			<img src={photoGrid} alt="A grid of images" className="photo-grid" />
			<div className="header-text">
				<h1 className="navbar-title">Online Experiences</h1>
				<p className="navbar-desc">
					Join unique interactive activities led by one-of-a-kind hosts-all
					without leaving home.
				</p>
			</div>
		</div>
	);
}

export default Hero;
