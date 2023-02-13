import React, { useEffect, useState } from "react";
import { BiCheckCircle } from "react-icons/bi";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaMinus,
  FaPinterestP,
  FaPlus,
  FaTimesCircle,
  FaTwitter,
} from "react-icons/fa";
import ReactImageZoom from "react-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import delivery from "../../assets/images/delivery.png";
import instance from "../../base_url";
import ProductDescription from "./ProductDescription";
import "./ProductDetails.css";
import RelatedProducts from "./RelatedProducts";

const ProductDetails = () => {
  const [details, setDetails] = useState([]);
  const [largeImage, setLargeImage] = useState(details[0]?.product_image);
  const { items, addItem, updateItemQuantity, getItem } = useCart();
  const { slug } = useParams();
  const props = { width: 300, height: 300, zoomWidth: 300 };

  if (localStorage.getItem("language") === "en") {
    var language = true;
  } else {
    language = false;
  }

  const getDetails = async () => {
    await instance
      .post("main_home/product_details", {
        key: "7fbaf493e3fe38a48934d93a3168926018adb657",
        slug: slug,
      })
      .then((response) => {
        if (details.length === 0) {
          setDetails(response.data);
        }
      });
  };
  useEffect(() => {
    setLargeImage(details[0]?.product_image);
    console.log(details);
  }, [details]);

  if (slug !== null) {
    getDetails();
  }

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      slidesToSlide: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
      slidesToSlide: 2,
    },
  };
  return (
    <div className="container">
      {details.map((val, key) => {
        return (
          <div>
            <div key={key} className="product__details__wrapper">
              <div className="row">
                <div className="col-md-6">
                  <div className="image">
                    <div className="image__LargeImg ">
                      <ReactImageZoom
                        {...props}
                        img={`/${val.product_image}`}
                      />
                    </div>

                    <div className="image__SmallImgs">
                      <Carousel responsive={responsive}>
                        <div
                          onClick={(e) => setLargeImage(val.product_image)}
                          className="image__SmallImg"
                        >
                          <img src={`/${val.product_image}`} alt="" />
                        </div>
                        <div
                          onClick={(e) => setLargeImage(val.product_image)}
                          className="image__SmallImg"
                        >
                          <img src={`/${val.product_image}`} alt="" />
                        </div>
                        <div
                          onClick={(e) => setLargeImage(val.product_image)}
                          className="image__SmallImg"
                        >
                          <img src={`/${val.product_image}`} alt="" />
                        </div>
                        <div
                          onClick={(e) => setLargeImage(val.product_image)}
                          className="image__SmallImg"
                        >
                          <img src={`/${val.product_image}`} alt="" />
                        </div>
                      </Carousel>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <h3 className="product__details__title">
                    {language ? val.en_product_name : val.bn_product_name}
                  </h3>
                  <div className="product__details__isStock">
                    {val.stock > 0 ? (
                      <p>
                        <BiCheckCircle /> In Stock
                      </p>
                    ) : (
                      <p style={{ color: "red" }}>
                        <FaTimesCircle /> Out Stock
                      </p>
                    )}
                    <span className="product__details__condition">New</span>
                  </div>
                  <div className="product__details__option">
                    <span className="product__details__option__title">
                      Price:
                    </span>
                    <span className="product__details__option__price">
                      ৳{val.price}
                    </span>
                    {val.prev_price ? (
                      <span className="product__details__option__previousPrice">
                        ৳{val.prev_price}
                      </span>
                    ) : (
                      <div></div>
                    )}
                  </div>
                  <div className="product__details__option">
                    {/* <p>
                      <span className="product__details__option__title">
                        Shop name :
                        {language ? val.en_vendor_name : val.bn_vendor_name}
                      </span>
                    </p> */}
                    <span className="product__details__option__title">
                      Weight :
                    </span>
                    <select name="" id="">
                      <option value="100gm">100gm</option>
                      <option value="200gm">200gm</option>
                      <option value="300gm">300gm</option>
                      <option value="400gm">400gm</option>
                    </select>
                  </div>
                  {/* <div className="product__details__option">
                    <span className="product__details__option__title">
                      Color:
                    </span>
                  </div> */}
                  <div className="product__details__option cart-quantity">
                    <span className="product__details__option__title">
                      Quantity:
                    </span>
                    <div className="product__details__handler">
                      {getItem(val.id) ? (
                        <button
                          className="btn"
                          style={{
                            padding: "0px 12px",
                          }}
                          onClick={() =>
                            updateItemQuantity(
                              val.id,
                              getItem(val.id) ? (
                                getItem(val.id).quantity - 1
                              ) : (
                                <div>0</div>
                              )
                            )
                          }
                        >
                          <FaMinus />
                        </button>
                      ) : (
                        <button
                          className="btn"
                          style={{
                            padding: "0px 12px",
                          }}
                        >
                          <FaMinus />
                        </button>
                      )}

                      <input
                        type="text"
                        className=" text-center"
                        value={Number(
                          getItem(val.id) ? getItem(val.id).quantity : 1
                        )}
                      />
                      <button
                        className="btn d-flex align-items-center justify-content-center"
                        onClick={() => addItem(val)}
                        style={{ marginLeft: "-4px" }}
                      >
                        <FaPlus />
                      </button>
                    </div>
                  </div>

                  <div className="product__details__delivery">
                    <div className="product__details__delivery__img">
                      <img src={delivery} alt="" />
                      <h5>Delivery Time</h5>
                    </div>
                    <h4>1-2 Days</h4>
                  </div>
                  <ul className="product-share">
                    <li className="product-share-icon">
                      <span>
                        <FaFacebookF />
                      </span>
                    </li>
                    <li className="product-share-icon">
                      <span>
                        <FaTwitter />
                      </span>
                    </li>
                    <li className="product-share-icon">
                      <span>
                        <FaLinkedinIn />
                      </span>
                    </li>
                    <li className="product-share-icon">
                      <span>
                        <FaPinterestP />
                      </span>
                    </li>
                  </ul>
                  <ul className="product-add">
                    <li
                      className="product-add-btn"
                      onClick={() => addItem(val)}
                    >
                      Add To Cart
                    </li>
                    <li className="product-add-btn">
                      <Link
                        to="/cart"
                        style={{
                          textDecoration: "none",
                          color: "#fff",
                        }}
                      >
                        Buy Now
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-md-8">
                <ProductDescription
                  description={
                    language
                      ? val.en_product_description
                      : val.bn_product_description
                  }
                  return_policy={language ? val.en_return : val.bn_return}
                />
              </div>
              <div className="col-md-4">
                <RelatedProducts />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductDetails;
