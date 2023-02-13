import React, { useState } from 'react';
import { BsFileEarmarkCheck } from 'react-icons/bs';
import InformationForm from './InformationForm';

const Information = (props) => {
    var userdata = "";
    if (localStorage.getItem('user')) {
        userdata = JSON.parse(localStorage.getItem('user'));
    }
    console.log(userdata);
    const [info, setInfo] = useState(true);

    const setHandler = (input) => {
        setInfo(input);
    };
    return (
        <>
            <div className="basic__information">
                <div className="basic__information__icon">
                    <BsFileEarmarkCheck />
                </div>
                <div className="basic__information__form">
                    <div className="info__title">
                        <h4>Personal Information</h4>
                    </div>
                    {info ? (
                        <div>
                        {userdata.map((val, key) => {
                        return (<div key={key} className="information">
                            <div className="information__body">
                                <div className="information__body_item">
                                    <p>Name: </p>
                                    <p>{val.name}</p>
                                </div>
                                <div className="information__body_item">
                                    <p>Contact Number: </p>
                                    <p> {val.number} </p>
                                </div>
                                <div className="information__body_item">
                                    <p>Email Address: </p>
                                    <p> {val.email}</p>
                                </div>
                                <div className="information__body_item">
                                    <p>Gender: </p>
                                    <p> {val.gender}</p>
                                </div>
                                <div className="information__body_item">
                                    <p>Date of Birth: </p>
                                    <p>{val.dob}</p>
                                </div>
                                <div className="information__body_item">
                                    <p>Member Since: </p>
                                    <p>{val.since}</p>
                                </div>
                            </div>
                            <div className="text-start pt-3 pe-2">
                                <button
                                    type="button"
                                    className="cancel__btn"
                                    onClick={() => setHandler(false)}
                                >
                                    Edit
                                </button>
                            </div>
                        </div>);
							})}
                        </div>
                    ) : (
                        <InformationForm setHandler={setHandler} />
                    )}
                </div>
            </div>
        </>
    );
};

export default Information;
