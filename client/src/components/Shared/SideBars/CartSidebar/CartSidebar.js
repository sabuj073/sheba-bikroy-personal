import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { useCart } from "react-use-cart";
import emptyImage from '../../../../assets/images/empty.svg';
import { cartSideBarAction } from '../../../../redux/actions/cartAction';
import './CartSidebar.css';


const CartSidebar = () => {
    const history = useHistory();
    const { cartSideBar } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const [codeShow, setCodeShow] = useState(false);
    const [walletShow, setWalletShow] = useState(false);
    const orderHandler = () => {
        dispatch(cartSideBarAction());
        history.push('/cart');
    };

    if (localStorage.getItem("language") === "en") {
        var language = true;
      } else {
        language = false;
      }

    const { items } = useCart();
    const { addItem } = useCart();
    const { totalItems } = useCart();
    const { removeItem } = useCart();
    const { updateItemQuantity } = useCart();
    const { cartTotal } = useCart();
    try {
        document.getElementById("cart_header").innerHTML = totalItems;
        document.getElementById("total_amount").innerHTML = cartTotal;

        console.log(totalItems);
    } catch {

    }
    return (
        <div
            className={`cart-sidebar transition shadow ${!cartSideBar && 'cart-sidebar__hide'
                }`}
        >
            <div className="cart-sidebar__header my-bg">
                <div className="cart__side__header">
                    <FaTimes
                        onClick={() => dispatch(cartSideBarAction())}
                        className="right__arrow"
                    />
                    <span>Delivery charge FREE! from order tk. 1000</span>
                </div>
            </div>
            <div className="cart-sidebar-products">
                {items.length === 0 && <div className="empty__image">
                    <img className="img-fluid" src={emptyImage} alt="" />
                    <h5>Nothing is added in the Cart </h5>
                </div>
                }

                {items.map((val, key) => (
                    <div key={key} className="cart__side__table">
                        <div className="row pt-1">
                            <div className="col-3 cart__side__img">
                                <img src={`/${val.product_image}`} alt="" />
                            </div>
                            <div className="col-5 cart__side__details">
                                <div className="w-100">
                                    <div className="cart__side__item__name">
                                    {language ? val.product_name : val.bn_product_name}<br></br>{val.short_desc}
                                    </div>
                                    <div className="cart__side__item__brief">
                                        Tk.{val.price}
                                    </div>
                                </div>
                            </div>
                            <div className="col-1 cart__side__quantity">
                                <div className="w-100 center-flex">
                                    <MdKeyboardArrowUp className="item__icon" onClick={() => addItem(val)} />
                                    <span className="item__quantity">{val.quantity}</span>
                                    <MdKeyboardArrowDown className="item__icon" onClick={() => updateItemQuantity(val.id, val.quantity - 1)} />
                                </div>
                            </div>
                            <div className="col-2 cart__side__price">
                                <div className="w-100">
                                    <div className="item__price">{val.quantity * val.price}</div>
                                    {val.prev_price ? (
                                        <div className="item__price__reduced">{val.quantity * val.prev_price}</div>
                                    ) : (<div></div>)}
                                </div>
                            </div>
                            <div className="col-1 cart__side__remove ps-0">
                                <RiDeleteBin5Line onClick={() => removeItem(val.id)} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="order__place__footer">
                <div className="order__place__bottom__common">
                    <div className="order__total__price">
                        <div
                            className="h5 order__promo__btn__back__common"
                            style={{ fontWeight: '600' }}
                        >
                            Product MRP Value:
                        </div>
                        <div
                            className="order__promo__btn__back__common OrderPrice me-2"
                            id="total_amount"
                        >
                            0
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <button
                        onClick={orderHandler}
                        className="order__promo__btn__proceed"
                    >
                        Checkout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartSidebar;
