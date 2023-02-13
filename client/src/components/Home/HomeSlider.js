/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useState } from 'react';
import Slider from 'react-slick';
import instance from '../../base_url.js';

const HomeSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
    };
    const [slider1, setslider1] = useState([]);
    const getSLider = async() => {
       await instance.post('getSLider1',{
            type:"slider1"
        }).then((response) => {
            if (slider1.length == 0) {
                setslider1(response.data);
            }
        });
    };
    getSLider();

    return (
        <Slider {...settings}>
            {slider1.map((val,key)=>{
            return <div className="home__slider__item">
                <img src={'../../'+val.slider_image} alt={val.slider_alt} className="img-fluid home__slider__img" />
            </div> })}
        </Slider>
    );
};

export default HomeSlider;
