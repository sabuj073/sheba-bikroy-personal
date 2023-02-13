import React, { useState } from 'react';
import instance from '../../base_url.js';
import { Link } from "react-router-dom";
const Services = (props) => {
    const { language } = props;
    const [cat, setCat] = useState([]);
    var area_id = "";
    
    const getCat = async () => {
        if(area_id!=""){
        await instance
            .post('main_home/get_service_cat', {
                key: '7fbaf493e3fe38a48934d93a3168926018adb657',
                area_id: area_id,
            })
            .then((response) => {
                if (cat.length == 0) {
                    setCat(response.data);
                }
            });
        }
    };
    if (localStorage.getItem("location")) {
        var locationData = JSON.parse(localStorage.getItem("location"));
        area_id = locationData.area;
        getCat();
      }
    getCat();
    return (
        <div className="main__home__services">
            <div className="container">
                <div className="main__home__title__wrapper">
                    <span className="main__home__title">
                        Our Services Categories
                    </span>
                </div>
                <div className="row">
                    <div className="row">
                        {cat.map((val, key) => {
                            return (

                                <div key={key} className="col-6 col-md-4 mt-3">
                                <Link
                                   to={"/category-vendor/" + val.cat_slug+"/"+val.cat_title}
                                  className="main__home__category transition"
                                >
                                  <span className="main__home__category__name">
                                    {val.cat_title}
                                  </span>
                                  <img
                                    src={val.cat_image}
                                    alt={val.alt}
                                    className="main__home__category__img"
                                  />
                                </Link>
                              </div>      

                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
