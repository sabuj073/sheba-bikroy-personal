import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { Link, useHistory } from "react-router-dom";
import instance from '../../base_url';
import './Auth.css';

const SignUp = () => {
    const history = useHistory();
    var msg = "";
    const register = async () => {
        document.getElementById("message").innerHTML = "";
        var name = document.getElementById("name").value;
        var number = document.getElementById("number").value;
        var password = document.getElementById("password").value;
        var cpassword = document.getElementById("cpassword").value;
        var policy = document.getElementById("policy").value;

        if (password == cpassword && password !== "" && cpassword !== "") {
            document.getElementById("message").innerHTML = "Please wait";
            await instance
                .post('main_home/register', {
                    key: '7fbaf493e3fe38a48934d93a3168926018adb657',
                    name: name,
                    number: number,
                    password: password
                })
                .then((response) => {
                    console.log(response.status);
                    if (response.status == '200') {
                        document.getElementById("message").innerHTML = "Registration Successful";
                        history.push("/login");
                    } else {
                        document.getElementById("message").innerHTML = "Something Wrong Happened";
                    }


                });
        } else {
            document.getElementById("message").innerHTML = "Both Passwords are not same";
        }
    };

    const [showReference, setShowReference] = useState(false);
    const showReferenceHandler = () => {
        setShowReference(!showReference);
    };
    return (
        <div className="container pb-4">
            <div className="row">
                <div className="col-md-6 mx-auto">
                    <div className="sign__form shadow-sm">
                        <h2>Sign Up</h2>
                        <FaTimes onClick={() => history.push('/home')} className="signTimes" />
                        <p className="sign__form__des">
                            Please fill in this from to create an account!
                        </p>
                        <center><p id="message">{msg}</p></center>
                        <div className="contact-form">
                            <div className="input-group py-1 mb-3 rounded">
                                <input
                                    type="text"
                                    className="form-control border-0"
                                    name="name"
                                    id="name"
                                    placeholder=" Full Name"
                                />
                            </div>
                            <div className="input-group py-1 mb-3 rounded">
                                <input
                                    type="text"
                                    name="phone"
                                    id="number"
                                    className="form-control border-0"
                                    placeholder="+088 Phone Number"
                                />
                            </div>

                            <div className="input-group py-1 mb-3 rounded">
                                <input
                                    type="password"
                                    className="form-control border-0"
                                    name="password"
                                    id="password"
                                    placeholder="Password "
                                />
                            </div>
                            <div className="input-group py-1 mb-3 rounded">
                                <input
                                    type="password"
                                    id="cpassword"
                                    className="form-control border-0"
                                    name="confirmPassword"
                                    placeholder="Confirm Password"
                                />
                            </div>
                            <div className="mb-2 form-check">
                                <input
                                    id="reference"
                                    type="checkbox"
                                    className="form-check-input"
                                    onClick={showReferenceHandler}
                                />
                                <label for="reference" className="form-check-label">
                                    Have a Reference Code?
                                </label>
                            </div>

                            {showReference && (
                                <div className="input-group py-1 mb-3 rounded">
                                    <input
                                        type="text"
                                        name="phone"

                                        className="form-control border-0"
                                        placeholder="Reference Code"
                                    />
                                </div>
                            )}

                            <div className="mb-3 form-check">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="policy"
                                    value="1"
                                />
                                <label className="form-check-label" for="policy">
                                    I accept policy the
                                    <Link to="/t/terms-of-use">
                                        Terms of Use
                                    </Link>{' '}
                                    &
                                    <Link to="/t/privacy-policy">
                                        {' '}
                                        Privacy Policy
                                    </Link>
                                </label>
                            </div>

                            <div className="center">
                                <button
                                    onClick={register}
                                    className="mt-2 sign__form__btn"
                                >
                                    Sign Up
                                </button>
                            </div>

                            <p className="text-center">
                                Already have an account?
                                <Link to="/login"> Login Here</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
