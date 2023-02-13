import React from 'react';
import { AiOutlineLogout } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';
import { FaHome, FaUser } from 'react-icons/fa';
import { IoMdNotifications } from 'react-icons/io';
import { RiShoppingBag3Fill } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import avatar from '../../../assets/images/avatar.png';
import logo from '../../../assets/images/Sheba-Bikroy-Logo-2.png';
import { cartSideBarAction } from '../../../redux/actions/cartAction';
import SelectArea from '../SelectArea/SelectArea';
import './Header.css';
import MobileNavbarBottom from './MobileNavbarBottom';

const Header = () => {
    const { totalItems } = useCart();
    const dispatch = useDispatch();

    const history = useHistory();
    const location = useLocation();
    console.log(history);



    const searchHandler = () => {
        if (location.pathname === '/') {
            document.getElementById('clickModal').click();
        } else {
            history.push('/search');
        }
    };

    const logout = () => {
        localStorage.removeItem("user");
        history.push("/login");
    }

    return (
        <>
            <div className="home__header__wrapper">
                <div className="home__header">
                    <div className="home__header__logo">
                        <span onClick={() => history.push('/')} className="home__icon__wrapper">
                            <FaHome
                                className="home__icon"
                                style={
                                    location.pathname === '/'
                                        ? { visibility: 'hidden' }
                                        : {
                                            background: '#f5881e',
                                            color: '#fff',
                                        }
                                }
                            />
                            <span
                                style={
                                    location.pathname === '/'
                                        ? { visibility: 'hidden' }
                                        : {}
                                }
                            >
                                Home
                            </span>
                        </span>

                        <Link to="/home">
                            <img src={logo} alt="" className="img-fluid" />
                        </Link>
                    </div>

                    <div className="home__header__search__form">
                        <div className="header__search">
                            <form className="header__search__form">
                                <input
                                    type="text"
                                    name="search"
                                    className="header__search__input"
                                    onChange={searchHandler}
                                    placeholder="Search For Product (e.g: Rice, Potato, Oil, Milk)"
                                />
                                <button
                                    type="submit"
                                    className="header__search__btn"
                                >
                                    <BsSearch className="header__search__icon" />
                                </button>
                            </form>
                        </div>
                        {/* <SearchBox /> */}
                    </div>

                    <div className="home__header__side__links d-none d-md-flex d-lg-flex">
                        <div className="home__header__link">
                            <span className="home__count">0</span>
                            <IoMdNotifications className="home__header__link__icon" />
                        </div>

                        <div
                            className="home__header__link"
                            onClick={() => dispatch(cartSideBarAction('open'))}
                        >
                            <span className="home__count" id="cart_header">
                                {totalItems}
                            </span>
                            <RiShoppingBag3Fill className="home__header__link__icon" />
                        </div>
                        <div className="home__header__link">
                            <img
                                className="home__header__link__img"
                                src={avatar}
                                alt=""
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            />
                            {localStorage.getItem('user') ? (
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
                                        <button
                                            className="dropdown-item"
                                            type="button"
                                            onClick={logout}
                                        >
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
                            ) : (
                                <ul className="dropdown-menu  dropdown-menu-dark">
                                    <li>
                                        <button
                                            className="dropdown-item"
                                            type="button"
                                            onClick={() =>
                                                history.push('/login')
                                            }
                                        >
                                            <FaUser
                                                style={{
                                                    fontSize: '19px',
                                                    marginRight: '10px',
                                                }}
                                            />
                                            Login
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            className="dropdown-item"
                                            type="button"
                                            onClick={() =>
                                                history.push('/sign-up')
                                            }
                                        >
                                            <AiOutlineLogout
                                                style={{
                                                    fontSize: '19px',
                                                    marginRight: '10px',
                                                }}
                                            />
                                            Register
                                        </button>
                                    </li>
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
                <SelectArea />
            </div>
            <MobileNavbarBottom />
        </>
    );
};

export default Header;
