import React from 'react';
import { useHistory } from "react-router-dom";

const ShipmentForm = (props) => {
    let history = useHistory();

    var userdata = "";

    if (!localStorage.getItem("user")) {
        history.push("/login");
    }

    if (localStorage.getItem('user')) {
        userdata = JSON.parse(localStorage.getItem('user'));
    }
    const { location } = props
    const district = [

        {
            value: 'dhaka',
            name: 'Dhaka',
        },
        {
            value: 'rajshahi',
            name: 'Rajshahi',
        },
        {
            value: 'chattogram',
            name: 'Chattogram',
        },
    ];
    return (
        <form className="pt-3">
            <div className="mb-3">
                <input
                    className="form-control"
                    type="text"
                    name="name"
                    id="checkout_name"
                    value={userdata[0].name}
                    placeholder="Name"
                />
            </div>
            <div className="mb-3">
                <input
                    className="form-control"
                    type="text"
                    name="phone"
                    id="checkout_phone"
                    value={userdata[0].number}
                    placeholder="Phone"
                />
            </div>
            <div className="mb-3">
                <input
                    className="form-control"
                    type="text"
                    name="email"
                    id="checkout_email"
                    value={userdata[0].email}
                    placeholder="Email"
                />
            </div>
            <div className="mb-3">
                <input
                    className="form-control"
                    type="text"
                    name="district_name"
                    value={location.district_name}
                    placeholder="District Name"
                    readOnly
                />
                <input
                    className="form-control"
                    type="hidden"
                    name="checkout_district"
                    id="checkout_district"
                    value={location.district}
                />
            </div>
            <div className="mb-3">
                <input
                    className="form-control"
                    type="text"
                    name="thana_name"
                    value={location.thana_name}
                    placeholder="Thana Name"
                    readOnly
                />
                 <input
                    className="form-control"
                    type="hidden"
                    name="checkout_thana"
                    id="checkout_thana"
                    value={location.thana}
                />
            </div>
            <div className="mb-3">
                <input
                    className="form-control"
                    type="text"
                    name="area_name"
                    value={location.area_name}
                    placeholder="Area Name"
                    readOnly
                />
                <input
                    className="form-control"
                    type="hidden"
                    name="checkout_area"
                    id="checkout_area"
                    value={location.area}
                />
            </div>

            <div className="mb-3">
                <textarea
                    name="address"
                    id="checkout_address"
                    className="form-control"
                    placeholder="Full Address"
                />
            </div>
            <div className="mb-3">
                <textarea
                    name="address"
                    id="checkout_note"
                    className="form-control"
                    placeholder="Order Note (optional)"
                />
            </div>
            <div className="mb-4 form-check">
                <input
                    type="checkbox"
                    className="form-check-input"
                    id="saveAddress"
                />
                <label className="form-check-label" for="saveAddress">
                    I agree to the terms & conditons and privacy policy </label>
            </div>
            {/* <button className="btn bg-brand w-100 mb-4" type="submit"> Continue</button> */}
        </form>
    );
};

export default ShipmentForm;