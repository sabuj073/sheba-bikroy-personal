import React from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { BsCheckCircle } from 'react-icons/bs';
import { FaLuggageCart, FaRegCreditCard } from 'react-icons/fa';
import { FiKey, FiLogOut } from 'react-icons/fi';
import { GrLocation } from 'react-icons/gr';
import { NavLink } from 'react-router-dom';
import image from '../../../assets/images/avatar.png';
import { useHistory } from "react-router-dom";

const ProfileRoutes = ({ profileRoute }) => {

    let history = useHistory();
    var userdata = "";

    const logout = async () => {
        localStorage.removeItem("user");
        history.push("/login");
    }

    if (localStorage.getItem('user')) {
        userdata = JSON.parse(localStorage.getItem('user'));
    }

    return (
        <div className="profile-menu shadow-sm">
            {userdata.map((val, key) => {
            return (<div className="profile__user">
                <img
                    className="img-fluid profile__user__img"
                    src={image}
                    alt="Profile"
                />
                <h3 className="profile__user__name">
                    {val.name}
                    <BsCheckCircle className="profile__check__success" />
                </h3>
                <button className="profile__btn">Check Account</button>
            </div>);
			})}
            {/* ********* Routes Item ********* */}
            <div
                className={
                    profileRoute === 'user-info'
                        ? 'profile-menu-item profile-active'
                        : 'profile-menu-item'
                }
            >
                <span className="profile-icon">
                    <AiOutlineUser />
                </span>
                <NavLink
                    to="/user/profile?tabs=user-info"
                    className="profile-route"
                >
                    Basic Information
                </NavLink>
            </div>
            {/* ********* Routes Item ********* */}
            <div
                className={
                    profileRoute === 'address'
                        ? 'profile-menu-item profile-active'
                        : 'profile-menu-item'
                }
            >
                <span className="profile-icon">
                    <GrLocation />
                </span>
                <NavLink
                    to="/user/profile?tabs=address"
                    className="profile-route"
                >
                    Address
                </NavLink>
            </div>
            {/* ********* Routes Item ********* */}
            <div
                className={
                    profileRoute === 'orders'
                        ? 'profile-menu-item profile-active'
                        : 'profile-menu-item'
                }
            >
                <span className="profile-icon">
                    <FaLuggageCart />
                </span>
                <NavLink
                    to="/user/profile?tabs=orders"
                    className="profile-route"
                >
                    Order History
                </NavLink>
            </div>
            {/* ********* Routes Item ********* */}
            <div
                className={
                    profileRoute === 'transaction'
                        ? 'profile-menu-item profile-active'
                        : 'profile-menu-item'
                }
            >
                <span className="profile-icon">
                    <FaRegCreditCard />
                </span>
                <NavLink
                    to="/user/profile?tabs=transaction"
                    className="profile-route"
                >
                    Wallet
                </NavLink>
            </div>
            {/* ********* Routes Item ********* */}
            <div
                className={
                    profileRoute === 'changePassword'
                        ? 'profile-menu-item profile-active'
                        : 'profile-menu-item'
                }
            >
                <span className="profile-icon">
                    <FiKey />
                </span>
                <NavLink
                    to="/user/profile?tabs=changePassword"
                    className="profile-route"
                >
                    Change Password
                </NavLink>
            </div>

            {/* ********* Routes Item ********* */}
            <div className="profile-menu-item" onClick={logout}>
                <label htmlFor="logout">
                    <span className="profile-icon">
                        <FiLogOut />
                    </span>
                    <span className="profile-route">logout</span>
                </label>
            </div>
        </div>
    );
};

export default ProfileRoutes;
