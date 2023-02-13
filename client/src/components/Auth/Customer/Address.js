import { useState } from 'react';
import { BiEdit } from 'react-icons/bi';
import { FaRegAddressCard } from 'react-icons/fa';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { RiDeleteBinLine } from 'react-icons/ri';

const Address = () => {
    const [showAddress, setShowAddress] = useState(true);

    const showHandler = (input) => {
        setShowAddress(input);
    };
    return (
        <>
            <div className="basic__information">
                <div className="basic__information__icon">
                    <FaRegAddressCard />
                </div>
                <div className="basic__information__form">
                    <div className="info__title">
                        <h4>Address</h4>
                    </div>
                    <div className="information">
                        {showAddress && (
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Full Name</th>
                                        <th scope="col">Address</th>
                                        <th scope="col">Region</th>
                                        <th scope="col">Phone Number</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                {/* <tbody>
                                    <tr>
                                        <td>Sujon Hossain</td>
                                        <td>Mirpur-13, dhaka</td>
                                        <td>Dhaka, Bangladesh</td>
                                        <td> 01980653626 </td>
                                        <td>
                                            <BiEdit
                                                className="edit__btn"
                                                onClick={() =>
                                                    showHandler(false)
                                                }
                                            />
                                            <RiDeleteBinLine className="delete__btn" />
                                        </td>
                                    </tr>
                                </tbody> */}
                            </table>
                        )}
                        {showAddress && (
                            <div className="d-flex justify-content-end">
                                <button
                                    className="address__add"
                                    onClick={() => showHandler(false)}
                                >
                                    <IoMdAddCircleOutline className="add__icon" />
                                    <p className="ms-2">Add New Address</p>
                                </button>
                            </div>
                        )}

                        {showAddress === false && (
                            <form>
                                <div className="row pt-2">
                                    <div className="col-md-6">
                                        <div className="input__group">
                                            <label htmlFor="">
                                                Recipient Name
                                            </label>
                                            <input
                                                type="text"
                                                name=""
                                                id=""
                                                placeholder="Recipient Name"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="input__group">
                                            <label htmlFor="">Region</label>
                                            <div className="input__select__group">
                                                <select
                                                    name=""
                                                    id=""
                                                    className="input__select"
                                                >
                                                    <option value="">
                                                        Dhaka
                                                    </option>
                                                    <option value="">
                                                        Rajshahi
                                                    </option>
                                                    <option value="">
                                                        Khulna
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="input__group">
                                            <label htmlFor="">Phone no.</label>
                                            <input
                                                type="text"
                                                name=""
                                                id=""
                                                placeholder="Phone no."
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="input__group">
                                            <label htmlFor="">City</label>
                                            <div className="input__select__group">
                                                <select
                                                    name=""
                                                    id=""
                                                    className="input__select"
                                                >
                                                    <option value="">
                                                        Dhaka
                                                    </option>
                                                    <option value="">
                                                        Banani
                                                    </option>
                                                    <option value="">
                                                        Khulna
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="input__group">
                                            <label htmlFor="">Address</label>
                                            <input
                                                type="text"
                                                name=""
                                                id=""
                                                placeholder="eg. mirpur-13"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="input__group">
                                            <label htmlFor="">City</label>
                                            <div className="input__select__group">
                                                <select
                                                    name=""
                                                    id=""
                                                    className="input__select"
                                                >
                                                    <option value="">
                                                        Mirpur
                                                    </option>
                                                    <option value="">
                                                        Banani
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="input__group">
                                    <button
                                        type="button"
                                        className="cancel__btn"
                                        onClick={() => showHandler(true)}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="submit__btn"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Address;
