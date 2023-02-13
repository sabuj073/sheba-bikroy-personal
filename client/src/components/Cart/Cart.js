import React, { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Link, useHistory } from "react-router-dom";
import { useCart } from "react-use-cart";
import emptyImage from "../../assets/images/empty.svg";
import "./Cart.css";

const Cart = () => {
  const [showCoupon, setShowCoupon] = useState(false);
  const [showBonus, setShowBonus] = useState(false);
  const [error_msg, setErrorMsg] = useState();
  const [applyBonus, setapplyBonus] = useState(false);
  const [applyCoupon, setapplyCoupon] = useState();
  let history = useHistory();

  if (localStorage.getItem("language") === "en") {
    var language = true;
  } else {
    language = false;
  }

  const checkspecialcode = () => {
    var code = document.getElementById("special_code").value;
    if (code === "" || code === null) {
      setErrorMsg("Please enter a code");
      setapplyCoupon();
    }
    if (code === "EID500") {
      setapplyCoupon(500);
      setErrorMsg();
    } else {
      setErrorMsg("Invalid Code");
      setapplyCoupon();
    }
  };

  const showCouponHandler = () => {
    if (localStorage.getItem("user")) {
      setShowCoupon(!showCoupon);
    } else {
      history.push("/login");
    }
  };
  const setShowBonusHandler = () => {
    if (localStorage.getItem("user")) {
      setShowBonus(!showBonus);
    } else {
      history.push("/login");
    }
  };
  const { items } = useCart();
  const { addItem } = useCart();
  const { totalItems } = useCart();
  const { removeItem } = useCart();
  const { updateItemQuantity } = useCart();
  const { cartTotal } = useCart();
  return (
    <section className="order-section pt-3 pb-5 py-md-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12 col-lg-7 order-xss-2">
            <h4 className="cart__title">   {language ? "Your Products" : "আপনার পণ্য"}</h4>
            <div className="cart-order-list">
              {items.length === 0 && (
                <div className="empty__image">
                  <img className="img-fluid" src={emptyImage} alt="" />
                  <h4> {language ? "Nothing is added in the Cart" : "কার্টে কিছুই যোগ করা হয়নি"}</h4>
                  <Link to="/home"> {language ? "Go back to shop" : "দোকানে ফিরে যান"}</Link>
                </div>
              )}
              {items.map((val, key) => (
                <div key={key} className="row pt-1 mb-3">
                  <div className="col-3 cart__side__img">
                    <img src={`/${val.product_image}`} alt="" />
                  </div>
                  <div className="col-5 cart__side__details">
                    <div className="w-100">
                      <div
                        className="cart__side__item__name"
                        style={{
                          fontSize: "14px",
                          fontWeight: "500",
                        }}
                      >
                        {language ? val.product_name : val.bn_product_name}
                        <br></br>
                        {val.short_desc}
                      </div>
                      <div className="cart__side__item__brief">{val.price}</div>
                    </div>
                  </div>
                  <div className="col-1 cart__side__quantity">
                    <div className="w-100">
                      <MdKeyboardArrowUp
                        className="item__icon"
                        onClick={() => addItem(val)}
                      />
                      <span className="item__quantity">{val.quantity}</span>
                      <MdKeyboardArrowDown
                        className="item__icon"
                        onClick={() =>
                          updateItemQuantity(val.id, val.quantity - 1)
                        }
                      />
                    </div>
                  </div>
                  <div className="col-2 cart__side__price">
                    <div className="w-100">
                      <div className="item__price">
                        {val.quantity * val.price}
                      </div>
                      {val.prev_price ? (
                        <div className="item__price__reduced">
                          {val.quantity * val.prev_price}
                        </div>
                      ) : (
                        <div></div>
                      )}
                    </div>
                  </div>
                  <div className="col-1 cart__side__remove ps-0">
                    <RiDeleteBin5Line onClick={() => removeItem(val.id)} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-md-6 col-lg-5 col-sm-12 mx-auto">
            <div className="order">
              <h4 className="cart__title">{language ? "Order Summary" : "অর্ডারের সারাংশ"}</h4>
              <div className="pt-0  pb-4 order-item">
                <div className="d-flex justify-content-between px-3 pt-3">
                  <p> {language ? "Product MRP Value:" : "পণ্যের MRP মূল্য:"}</p>
                  <p>
                    <small>৳</small> {cartTotal}
                  </p>
                </div>

                <div className="mb-2 form-check ms-3">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    onClick={showCouponHandler}
                    id="specialCode"
                  />
                  <label className="form-check-label" for="specialCode">
                    {language ? "Have a Special Code?" : "একটি বিশেষ কোড আছে?"}
                  </label>
                </div>
                {showCoupon && (
                  <div className="mb-2 px-3 d-flex align-items-center justify-content-between ">
                    <div className="d-flex">
                      <input
                        id="special_code"
                        name="phone"
                        type="text"
                        className="form-control form-control-sm cart-input"
                        placeholder="Enter Special Code"
                      />
                      <button
                        className="btn  bg-brand btn-sm ms-2"
                        onClick={checkspecialcode}
                      >
                        
                        {language ? "Apply" : "আবেদন করুন"}
                      </button>
                    </div>
                    {applyCoupon && (
                      <span style={{ fontWeight: "600", fontSize: "15px" }}>
                        {" "}
                        -{applyCoupon}{" "}
                      </span>
                    )}
                  </div>
                )}
                {error_msg && (
                  <div className="form-check">
                    <div id="alerts" className="error-alert">
                      <small>{error_msg}</small>
                    </div>
                  </div>
                )}
                <div className="mb-2 form-check ms-3">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    onClick={setShowBonusHandler}
                    id="bounceAmount"
                  />
                  <label className="form-check-label" for="bounceAmount">
                    {language ? " Use The Bonus Amount?" : "বোনাস পরিমাণ ব্যবহার করবেন?"}
                  </label>
                </div>

                {showBonus && (
                  <div className="mb-2 px-3 d-flex align-items-center justify-content-between ">
                    <div className="d-flex">
                      <input
                        id="bounce_code"
                        name="phone"
                        type="text"
                        className="form-control form-control-sm cart-input"
                        placeholder="Enter Amount"
                      />
                      <button className="btn  bg-brand btn-sm ms-2">
                      {language ? "Apply" : "আবেদন করুন"}
                      </button>
                    </div>
                    {applyBonus && (
                      <span style={{ fontWeight: "600", fontSize: "15px" }}>
                        {" "}
                        -{applyBonus}{" "}
                      </span>
                    )}
                  </div>
                )}

                <div className="d-flex justify-content-between px-3 mt-4 pb-1">
                  <p> {language ? "Now Subtotal" : "এখন সাবটোটাল"}</p>
                  <p>
                    <small>৳</small> {cartTotal}
                  </p>
                </div>

                <div className="d-flex justify-content-between px-3">
                  <small>  {language ? "Delivery Charge" : "ডেলিভারি চার্জ"} </small>
                  <p>
                    <small>৳ </small>40
                  </p>
                </div>

                <div className="d-flex justify-content-between px-3 pt-md-2 pt-3">
                  <p style={{ fontSize: "18px" }}> {language ? "Net Payable" : "নেট পরিশোধযোগ্য"} </p>
                  <p className="btn btn-warning btn-sm">
                    <small>৳</small> {cartTotal + 40}
                  </p>
                </div>
                <div className="product-btn mt-3">
                  <Link
                    className="btn bg-brand w-100 confirm-btn "
                    to="/checkout"
                  >
                    {language ? "Proceed To Order" : "অর্ডার করতে এগিয়ে যান"}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
