import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import apple from "../../../assets/images/apple.png";
import android from "../../../assets/images/playstore.png";
import instance from "../../../base_url.js";
import "./Footer.css";
import FooterForm from "./FooterForm";

const Footer = () => {
  const [info, setInfo] = useState([]);
  const getinfo = async () => {
    await instance.get("getinfo").then((response) => {
      if (info.length == 0) {
        setInfo(response.data);
      }
    });
  };

  if (localStorage.getItem("language") === "en") {
    var language = true;
  } else {
    language = false;
  }

  getinfo();
  return (
    <section className="footer" id="main__footer ">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <h3 className="footer__description__title">কিছু কথা:</h3>
            <p className="footer__description__content">
              {info.map((val, key) => {
                return val.footer_text;
              })}
            </p>
            <div className="row">
              <div className="col-6 col-md-6 col-lg-4 mb-1">
                <h5 className="footer__link__title">Customer Service</h5>
                <Link to="/t/contact-us" className="footer__link">
                  {language ? "Contact Us" : "যোগাযোগ করুন"}
                </Link>
                <Link to="/t/return-policy" className="footer__link">
                  {language ? "Return Policy" : "প্রত্যাবর্তন নীতিমালা"}
                </Link>
                <Link to="/t/exchange-policy" className="footer__link">
                  {language ? "Exchange policy" : "বিনিময় নীতি"}
                </Link>
                <Link to="/f/faq" className="footer__link">
                  {language ? "FAQ" : "প্রায়শই জিজ্ঞাসিত প্রশ্নাবলী"}
                </Link>
              </div>
              <div className="col-6 col-md-6 col-lg-4 mb-1">
                <h5 className="footer__link__title">About Seba Bikroy</h5>
                <Link to="/t/privacy-policy" className="footer__link">
                  {language ? "Privacy Policy" : "গোপনীয়তা নীতি"}
                </Link>
                <Link to="/t/terms-of-use" className="footer__link">
                  {language ? "Terms of Use" : "ব্যবহারের শর্তাবলী"}
                </Link>
              </div>
              <div className="col-6 col-md-6 col-lg-4 mb-1">
                <h5 className="footer__link__title">For Business</h5>
                <Link to="/t/corporate" className="footer__link">
                  {language ? "Corporate" : "কর্পোরেট"}
                </Link>
                <Link to="/t/corporate" className="footer__link">
                  {language ? "Be Seller" : "বিক্রেতা হও"}
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-8 col-lg-4 offset-md-4 offset-lg-0">
            <div className="footer__social__icons pb-3">
              <Link to="/" className="footer__icon__item">
                <FaFacebookF className="footer__social__icon" />
              </Link>
              <Link to="/" className="footer__icon__item">
                <FaTwitter className="footer__social__icon" />
              </Link>
              <Link to="/" className="footer__icon__item">
                <FaInstagram className="footer__social__icon" />
              </Link>
              <Link to="/" className="footer__icon__item">
                <FaYoutube className="footer__social__icon" />
              </Link>
            </div>
            {info.map((val, key) => {
              return (
                <div className="footer__available">
                  <div className="footer__available__item">
                    <a target="_blank" rel="noreferrer" href={val.android}>
                      <img
                        src={android}
                        alt="Android"
                        className="img-fluid footer__available__img"
                      />{" "}
                    </a>
                    <div className="footer__available__name">
                      <a
                        className="link__data"
                        target="_blank"
                        rel="noreferrer"
                        href={val.android}
                      >
                        <span>Android App on</span>
                        <strong>Google Play</strong>
                      </a>
                    </div>
                  </div>
                  <div className="footer__available__item footer__available__apple">
                    <a target="_blank" rel="noreferrer" href={val.ios}>
                      <img
                        src={apple}
                        alt="IOS"
                        style={{ marginRight: "14px" }}
                        className="img-fluid footer__available__img"
                      />{" "}
                    </a>
                    <div className="footer__available__name">
                      <a
                        className="link__data"
                        target="_blank"
                        rel="noreferrer"
                        href={val.ios}
                      >
                        <span>iPhone App on</span>
                        <strong>App Store</strong>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}

            <FooterForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
