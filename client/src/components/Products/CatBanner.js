import React from 'react';
import ReactImageAppear from 'react-image-appear';
import { Link } from 'react-router-dom';

const Banner = (props) => {
	const { product } = props
	return (
		<div className="main__home__banner">
			{product ? (
				<div className="row g-4">
					<div className="col-md-6">
						<Link to="/" className="main__home__banner__item " style={{ display: 'block' }}>
							<ReactImageAppear
								src={`/${product.cat_banner}`}
								alt={product.alt}
								className="main__home__banner__img img-fluid "
							/>
						</Link>
					</div>
					<div className="col-md-6">
						<Link to="/" className="main__home__banner__item " style={{ display: 'block' }}>
							<ReactImageAppear
								src={`/${product.cat_banner_2}`}
								alt={product.alt}
								className="main__home__banner__img img-fluid "
							/>
						</Link>
					</div>
				</div>) : (<div></div>)}
		</div>
	);
};

export default Banner;
