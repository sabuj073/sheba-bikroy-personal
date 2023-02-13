/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import Slider from 'react-slick';
import instance from '../../base_url.js';

const HomeBanner = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 1000,
		autoplay: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
	};

	const [slider1, setslider1] = useState([]);
	const getSLider = async () => {
		await instance
			.post('main_home/getSLider', {
				type: 'home_slider',
				key: '7fbaf493e3fe38a48934d93a3168926018adb657',
			})
			.then((response) => {
				if (slider1.length == 0) {
					setslider1(response.data);
				}
			});
	};
	getSLider();
	return (
		<Slider {...settings}>
			{slider1.map((val, key) => {
				return (
					<div key={key} className="main__home__slider__item">
						<img
							src={'../../' + val.slider_image}
							alt={val.slider_alt}
							className="img-fluid main__home__slider__img"
						/>
					</div>
				);
			})}
		</Slider>
	);
};

export default HomeBanner;
