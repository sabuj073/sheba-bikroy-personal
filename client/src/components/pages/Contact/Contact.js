import React from "react";
import PageLinks from "../PageLinks";
import "../style.css";
import ContactArea from "./ContactArea";
import ContactForm from "./ContactForm";

const Contact = (props) => {
  const { info, language } = props;
  return (
    <section className="contact-section">
      <div className="container ">
        <div className="page__bg__img">
          <div className="page__img"></div>
          <div className="page__title">Contact Us</div>
          <PageLinks />
        </div>
        {info.map((val, key) => {
          return (
            <div key={key} className="page__content">
              {language ? val.contact_us : val.bn_contact_us}
            </div>
          );
        })}
        <div className="row d-flex align-items-center mb-5">
          <ContactForm />
          <ContactArea info={info} language={language} />
        </div>
      </div>
    </section>
  );
};

export default Contact;
