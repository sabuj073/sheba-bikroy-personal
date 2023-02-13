import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../../assets/images/banner1.jpg';
import image2 from '../../assets/images/banner2.jpg';

const Banner = () => {
    return (
        <div className="home__banner">
            <div className="container">
                <div className="row g-3 ">
                    <div className="col-md-6">
                        <Link to="/" className="main__home__banner__item ">
                            <img src={image1} alt="" className="main__home__banner__img img-fluid " />
                        </Link>
                    </div>
                    <div className="col-md-6">
                        <Link to="/" className="main__home__banner__item ">
                            <img src={image2} alt="" className="main__home__banner__img img-fluid " />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;