import React from 'react';
import message from '../../assets/images/icons/chat.png';
import secure from '../../assets/images/icons/credit-card.png';
import returnProduct from '../../assets/images/icons/return.png';
import rocket from '../../assets/images/icons/startup.png';

const ServiceInfo = () => {
    return (
        <section className="main__home__service__info">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-6 col-xl-3 ">
                        <div className="main__home__service__info__item">
                            <div className="main__home__service__info__item__icon">
                                <img
                                    src={rocket}
                                    alt=""
                                    className="main__home__service__info__img"
                                />
                            </div>
                            <div className="main__home__service__info__item__info">
                                <h4>Free Delivery</h4>
                                <p>For All orders over Tk 5000</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-6 col-xl-3 ">
                        <div className="main__home__service__info__item">
                            <div className="main__home__service__info__item__icon">
                                <img
                                    src={returnProduct}
                                    alt=""
                                    className="main__home__service__info__img"
                                />
                            </div>
                            <div className="main__home__service__info__item__info">
                                <h4>Free Delivery</h4>
                                <p>For All orders over Tk 5000</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-6 col-xl-3 ">
                        <div className="main__home__service__info__item">
                            <div className="main__home__service__info__item__icon">
                                <img
                                    src={secure}
                                    alt=""
                                    className="main__home__service__info__img"
                                />
                            </div>
                            <div className="main__home__service__info__item__info">
                                <h4>Free Delivery</h4>
                                <p>For All orders over Tk 5000</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-6 col-xl-3 ">
                        <div className="main__home__service__info__item">
                            <div className="main__home__service__info__item__icon">
                                <img
                                    src={message}
                                    alt=""
                                    className="main__home__service__info__img"
                                />
                            </div>
                            <div className="main__home__service__info__item__info">
                                <h4>Free Delivery</h4>
                                <p>For All orders over Tk 5000</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceInfo;
