import React, { useState } from "react";
import { Helmet } from "react-helmet";
import instance from "../../base_url.js";
import Modal from "../Home/Modal";
import Banner from "../Products/Banner";
import Products from "../Products/Products";
import Categories from "./Categories";
import "./Home.css";
import HomeBanner from "./HomeBanner";
import HomeInfo from "./HomeInfo";
import Notice from "./Notice";
import PopularBrands from "./PopularBrands";
import Services from "./Services";

const MainHome = () => {
  const [info, setInfo] = useState([]);
  if (localStorage.getItem("language") === "en") {
    var language = true;
  } else {
    language = false;
  }
  const getinfo = async () => {
    await instance.get("getinfo").then((response) => {
      if (info.length == 0) {
        setInfo(response.data);
      }
    });
  };
  const [meta, setmeta] = useState([]);
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
  getinfo();
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
      <section className="home__section">
        <div className="container-fluid p-0">
          <HomeBanner />
        </div>
        <div className="container px-2">
          {info ? <Notice info={info} language={language} /> : <div></div>}

          <HomeInfo language={language} />
          <Categories language={language} />
          <br></br>
          {/* <PopularBrands /> */}
          <Services />
          <Banner />
          {/* <Products language={language} /> */}
        </div>
      </section>
      <Modal />
    </>
  );
};

export default MainHome;
