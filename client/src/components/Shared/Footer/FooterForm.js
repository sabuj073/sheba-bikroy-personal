import React from 'react';
import instance from '../../../base_url.js';
import Select from '../../Shared/Select/Select';

const FooterForm = () => {
    const send_customer_sms = async () => {
        var name = document.getElementById('name').value;
        var phone = document.getElementById('phone').value;
        var message = document.getElementById('message').value;
        await instance
            .post('send-customer-sms', {
                name: name,
                phone: phone,
                message: message,
            })
            .then((response) => {
                document.getElementById('name').value = '';
                document.getElementById('phone').value = '';
                document.getElementById('message').value = '';
                // document.getElementById('alert').innerHTML =
                // 	'<div className="alert alert-success alert-dismissible"><strong>Success!</strong> Message Sent Successfully.</div>';
            });
    };

    const district = [
        {
            value: 'dhaka',
        },
        {
            value: 'Rajshahi',
        },
        {
            value: 'Gazipur',
        },
    ];
    return (
        <>
            <div
                className="mx-auto my-3 p-2 rounded footer__form"
                style={{ backgroundColor: '#2c3e50' }}
            >
                <h5
                    className=" text-white text-center"
                    data-bs-toggle="modal"
                    data-bs-target="#FooterForm"
                    style={{ cursor: 'pointer' }}
                >
                    Have a Suggestion?
                </h5>
            </div>

            <div
                className="modal fade"
                id="FooterForm"
                tabIndex="-1"
                aria-labelledby="FooterFormLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="area__select__modal__dismiss">
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="area__select__modal p-3">
                            <div className="mb-2">
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    className="form-control"
                                    placeholder="Full Name"
                                />
                            </div>
                            <div className="mb-2">
                                <input
                                    id="phone"
                                    name="phone"
                                    type="text"
                                    className="form-control"
                                    placeholder="Phone Number"
                                />
                            </div>

                            <div className="mb-2">
                                <Select
                                    label="Select District"
                                    options={district}
                                />
                            </div>
                            <div className="mb-2">
                                <Select
                                    label="Select Thana"
                                    options={district}
                                />
                            </div>
                            <div className="mb-2">
                                <Select
                                    label="Select Area"
                                    options={district}
                                />
                            </div>

                            <div className="mb-2">
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="3"
                                    className="form-control"
                                    placeholder="Your Message"
                                />
                            </div>
                            <div className="text-center form-group">
                                <button
                                    type="submit"
                                    className="btn btn-light "
                                    onClick={send_customer_sms}
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FooterForm;
