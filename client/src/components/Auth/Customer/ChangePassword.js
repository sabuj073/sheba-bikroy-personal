import React from 'react';
import { BsFileEarmarkCheck } from 'react-icons/bs';

const ChangePassword = () => {
    return (
        <div className="basic__information">
            <div className="basic__information__icon">
                <BsFileEarmarkCheck />
            </div>
            <div className="basic__information__form">
                <div className="info__title">
                    <h4>Change Password</h4>
                </div>
                <div className="container">
                    <form className="mx-1 p-4 mt-3  shadow-sm ">
                        <div className="input__group">
                            <input
                                type="password"
                                placeholder="Old Password"
                                name="oldPassword"
                            />
                        </div>
                        <div className="input__group">
                            <input
                                type="password"
                                placeholder="New Password"
                                name="newPassword"
                            />
                        </div>

                        <div className="input__group">
                            <input
                                type="password"
                                placeholder="Confirm New Password"
                                name="confirmPassword"
                            />
                        </div>
                        <div className="input__group">
                            <button type="submit" className="submit__btn">
                                Change Password
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ChangePassword;
