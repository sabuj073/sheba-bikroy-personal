import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../../assets/images/banner1.jpg';
import image2 from '../../assets/images/banner2.jpg';

const Banner = () => {
	return (
		<div className="main__home__banner">
			<div className="row g-4">
				<div className='col-md-2'></div>
				<div className="col-md-8">
					<Link to="/" className="main__home__banner__item " style={{ display: 'block' }}>
						<img
							src={image1}
							alt=""
							className="main__home__banner__img img-fluid make__full_width"
						/>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Banner;
