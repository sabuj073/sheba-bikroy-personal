/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import Slider from 'react-slick';
import instance from '../../base_url.js';

const OrderSlider = () => {
    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 1000,
    //     autoplay: false,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     arrows: true,
    // };
    // const [slider1, setslider1] = useState([]);
    // const getSLider = async () => {
    //     await instance
    //         .post('getSLider1', {
    //             type: 'slider3',
    //         })
    //         .then((response) => {
    //             if (slider1.length == 0) {
    //                 setslider1(response.data);
    //             }
    //         });
    // };
    // getSLider();

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        autoplay: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
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
        <section className="order__slider">
            <div className="container">
                <h2 className="order__slider__title">অর্ডার পদ্ধতি </h2>
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
            </div>
        </section>
    );
};

export default OrderSlider;
