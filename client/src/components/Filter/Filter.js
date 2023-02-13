import { Link } from 'react-router-dom';
import category1 from '../../assets/images/subCategory/unimart.png';
import image1 from '../../assets/images/subCategory/baby-care.jpg';
import category3 from '../../assets/images/subCategory/shopno.png';
import category4 from '../../assets/images/subCategory/unimart.png';
import user from '../../assets/images/subCategory/user.png';
import { useParams } from "react-router";
import instance from "../../base_url";
import React, { useEffect, useState } from "react";
import './Filter.css';

const Filter = () => {
    const [vendors, setVendors] = useState([]);
    const { slug,title } = useParams();
    if (localStorage.getItem("language") === "en") {
        var language = true;
      } else {
        language = false;
      }

    const getDetails = async () => {
        await instance
          .post("get-vendors-by-category/", {
                key: "7fbaf493e3fe38a48934d93a3168926018adb657",
                slug: slug,
          })
          .then((response) => {
            if (vendors.length === 0) {
                setVendors(response.data);
            }
          });
      };

    getDetails();
    console.log(vendors);

    return (
        <div className="pb-4">
            <div className="container-fluid p-0">
                <div className="row g-3 ">
                    <div className="col-12">
                        <div className="filter__image__wrapper">
                            <img src={image1} alt="" className='img-fluid banner-fluid'/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container px-2">
                <div className="filter__link__1">
                    <a href="/product-filter">{title}</a>
                </div>
                <div className="category__section">
                    <hr className="first" />
                    <div className="name">{title}</div>
                    <hr className="last" />
                </div>

                <div className='text-center mt-2'>
                <h2 className='filter__title'>আপনার পছন্দের দোকান থেকে কেনাকাটা করুন</h2>
                </div>

                <div className="row mt-5">
                {vendors.map((val, key) => {
                 return (
                 <div className="col-12 col-md-3">
                        <Link
                            to={"/vendor/products/"+val.vendor_slug+"/"+val.vendor_id+"/"+val.v_category_id}
                            className="sub__category__link"
                        >
                            <div className='card'>
                            <div className="category__image__wrapper">
                                <img src={val.shop_image} alt=""/>
                            </div>
                            <div className='row mt-2 pb-2 pt-1'>
                                <div className='col-0 col-md-1'></div>
                                <div className='col-4 col-md-4 text-right'>
                                     <img src={val.provider_photo} alt="" className='img-fluid user__image round__shape' />
                                     {val.online_status ? (
                                     <span class="logged-in">●</span>
                                     ) : (
                                     <span class="logged-out">●</span>
                                     )}
                                </div>
                                <div className='col-8 col-md-6 text-left'>
                                <div className="name shop_name text-left remove-padding-left">{val.shop_name }<br></br>{val.propiter_name}</div>
                                </div>
                                
                            
                            </div>
                            </div>
                        </Link>
                    </div>
                    );
                })}
                </div>
            </div>
        </div>
    );
};

export default Filter;
