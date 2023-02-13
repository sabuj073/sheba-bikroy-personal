import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaUser } from 'react-icons/fa';

const ContactForm = () => {
    return (
        <div className="col-md-7 align-items-center " >
            <form className="contact-form shadow-sm p-4 rounded" style={{ backgroundColor: ' #f7f8fa' }}>
                <div className="form-row">
                    <div className="input-group  p-3 mb-2 rounded">
                        <span className="input-group-text border-0  text-brand ">
                            <FaUser />
                        </span>
                        <input
                            type="text"
                            className="form-control border-0"
                            placeholder="Name*"
                            name="name"
                        />
                    </div>
                    <div className="input-group p-3 mb-2 rounded">
                        <span className="input-group-text border-0  text-brand">
                            <FaPhoneAlt />
                        </span>
                        <input
                            type="text"
                            name="phone"
                            className="form-control border-0"
                            placeholder="Phone Number*"
                        />
                    </div>
                    <div className="input-group p-3 mb-2 rounded">
                        <span className="input-group-text border-0  text-brand">
                            <FaEnvelope />{' '}
                        </span>
                        <input
                            type="email"
                            className="form-control border-0"
                            placeholder="Email Address*"
                            name="email"
                        />
                    </div>
                    <div className="input-group p-3 mb-2 rounded">
                        <textarea
                            className="form-control border-0"
                            placeholder="Your Text*"
                            rows="3"
                            name="userMessage"
                        />
                    </div>
                </div>

                <button type="submit" className="form-btn mt-2 form-btn ms-3">
                    Message
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
