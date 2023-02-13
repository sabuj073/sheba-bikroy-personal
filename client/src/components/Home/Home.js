import React, { useState } from "react";
import { Helmet } from "react-helmet";
import "../../assets/styles/home.css";
import instance from "../../base_url.js";
import ServiceInfo from "../MainHome/ServiceInfo";
import Banner from "./Banner";
import HomeSlider from "./HomeSlider";
import HomeSlider2 from "./HomeSlider2";
import OrderSlider from "./OrderSlider";

const Home = () => {
  const [meta, setmeta] = useState([]);
  if (localStorage.getItem("language") === "en") {
    var language = true;
  } else {
    language = false;
  }
  const getMeta = async () => {
    await instance
      .post("get-meta", {
        type: "home",
      })
      .then((response) => {
        if (meta.length == 0) {
          setmeta(response.data);
        }
      });
  };
  getMeta();
  return (
    <>
      {meta.map((val, key) => {
        return (
          <Helmet>
            <title>{val.meta_title}</title>
            <meta name="description" content={val.meta_description} />
          </Helmet>
        );
      })}

      <section className="home" id="right_side">
        <div className="container">
          <div className="home__top__title">
            <h2>
              {/* <span className="brand__color"> সেবা </span>
              <span className="red__color"> বিক্রয়</span>.কম - এ স্বাগতম */}
            </h2>
            <h4 className="animate__animated animate__backInRight">
              {language
                ? "Online supershop and service"
                : "অনলাইন সুপারশপ এবং সার্ভিস"}
            </h4>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="home__slider__top__title">
                <h2>{language ? "Shop at home" : "ঘরে বসেই বাজার করুন"}</h2>
                {/* <h3>
                  <span className="brand__color"> সেবা </span>
                  <span className="red__color"> বিক্রয়</span>
                  .কম - এ
                </h3> */}
              </div>
              <div className="home__slider">
                <HomeSlider />
              </div>
              <div className="home__slider__btn">
                <button
                  id="clickModal"
                  type="button"
                  className="slider__btn"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Our Products
                </button>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="home__slider__top__title">
                <h2>
                  {language
                    ? "Take service sitting at home"
                    : "ঘরে বসেই সেবা নিন"}
                </h2>
                {/* <h3>
                  <span className="brand__color"> সেবা </span>
                  <span className="red__color"> বিক্রয়.</span>
                  কম - এ
                </h3> */}
              </div>
              <div className="home__slider">
                <HomeSlider2 />
              </div>
              <div className="home__slider__btn">
                <button
                  type="button"
                  className="slider__btn"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  {language ? "Our Services" : "আমাদের সেবাসমূহ"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ServiceInfo />
      <Banner />
      <OrderSlider />
    </>
  );
};

export default Home;
