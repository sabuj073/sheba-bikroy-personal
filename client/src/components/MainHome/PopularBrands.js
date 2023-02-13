import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import instance from '../../base_url.js';

const PopularBrands = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };

    const [brand, setBrand] = useState([]);
    const getBrands = async () => {
        await instance
            .post('main_home/get_brand', {
                key: '7fbaf493e3fe38a48934d93a3168926018adb657',
            })
            .then((response) => {
                if (brand.length == 0) {
                    setBrand(response.data);
                }
            });
    };
    getBrands();
    return (
        <div className="main__home__brands">
            <h3 className="main__home__brands__title">Shop By Brands</h3>
            <div className="container">
                <Slider {...settings}>
                    {brand.map((val, key) => (
                        <div>
                            <Link
                                to="/category/products"
                                className="brands__item"
                                key={key}
                            >
                                <img
                                    src={'../../' + val.brand_icon}
                                    alt={val.brand_alt}
                                    className="brands__item__link img-fluid"
                                />
                            </Link>
                        </div>
                    ))}
                    {brand.map((val, key) => (
                        <div>
                            <Link
                                to="/category/products"
                                className="brands__item"
                                key={key}
                            >
                                <img
                                    src={'../../' + val.brand_icon}
                                    alt={val.brand_alt}
                                    className="brands__item__link img-fluid"
                                />
                            </Link>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default PopularBrands;
