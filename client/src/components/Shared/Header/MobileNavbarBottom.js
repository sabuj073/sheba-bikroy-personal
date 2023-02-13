import React from 'react';
import {
    AiOutlineHome, AiOutlineLogout, FaUser, HiOutlineShoppingCart,
    IoMdNotificationsOutline
} from 'react-icons/all';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { useCart } from "react-use-cart";
import avatar from '../../../assets/images/avatar.png';
import { cartSideBarAction } from '../../../redux/actions/cartAction';

const MobileNavbarBottom = () => {
    const { totalItems } = useCart();
    const history = useHistory();
    const dispatch = useDispatch();

    return (
        <nav className="mobile-bottom-menu fixed-nav-bottom  d-md-none d-lg-none">
            <div className="container px-3">
                <div className="d-flex justify-content-between py-2">
                    <div className="bottom-menu-item">
                        <div className="icon-wrapper" onClick={() => history.push('/')}>
                            <span className="icon">
                                <AiOutlineHome />
                            </span>
                        </div>
                        <span className="menu-text"> Home </span>
                    </div>
                    <div className="bottom-menu-item">
                        <div className="icon-wrapper">
                            <span className="icon">
                                <IoMdNotificationsOutline />
                            </span>
                            <span className="cart-quantity" id="cart-count">
                                0
                            </span>
                        </div>
                        <span className="menu-text"> Notification </span>
                    </div>
                    <div className="bottom-menu-item">
                        <div className="icon-wrapper"
                            onClick={() => dispatch(cartSideBarAction('open'))}
                        >
                            <span className="icon">
                                <HiOutlineShoppingCart />
                            </span>
                            <span className="cart-quantity" id="cart-count">
                                {totalItems}
                            </span>
                        </div>
                        <span className="menu-text"> Cart</span>
                    </div>

                    <div className="bottom-menu-item">
                        <div className="home__header__link display-flex">
                            <img
                                className="home__header__link__img"
                                src={avatar}
                                alt=""
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            />
                            <span className="menu-text"> Profile </span>
                            <ul className="dropdown-menu  dropdown-menu-dark">
                                <li>
                                    <button
                                        className="dropdown-item"
                                        type="button"
                                        onClick={() =>
                                            history.push('/user/profile')
                                        }
                                    >
                                        <FaUser
                                            style={{
                                                fontSize: '19px',
                                                marginRight: '10px',
                                            }}
                                        />
                                        My Account
                                    </button>
                                </li>
                                <li>
                                    <button className="dropdown-item" type="button">
                                        <AiOutlineLogout
                                            style={{
                                                fontSize: '19px',
                                                marginRight: '10px',
                                            }}
                                        />
                                        Logout
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default MobileNavbarBottom;
