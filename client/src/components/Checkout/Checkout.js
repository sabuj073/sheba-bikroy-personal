import { useCart } from "react-use-cart";
import "./Checkout.css";
import ShipmentForm from "./ShipmentForm";
import swal from "sweetalert";
import { useHistory } from "react-router-dom";
import instance from "../../base_url";

const Checkout = () => {
  const { items } = useCart();
  const { addItem } = useCart();
  const { totalItems } = useCart();
  const { removeItem } = useCart();
  const { updateItemQuantity } = useCart();
  const { cartTotal } = useCart();
  let history = useHistory();

  if (localStorage.getItem("language") === "en") {
    var language = true;
  } else {
    language = false;
  }

  if (localStorage.getItem("location")) {
    var location = JSON.parse(localStorage.getItem("location"));
  } else {
    history.push("/home");
  }

  if (!localStorage.getItem("user")) {
    history.push("/login");
  }

  const docheckout = async () => {
    var name = document.getElementById("checkout_name").value;
    var phone = document.getElementById("checkout_phone").value;
    var email = document.getElementById("checkout_email").value;
    var district = document.getElementById("checkout_district").value;
    var thana = document.getElementById("checkout_thana").value;
    var area = document.getElementById("checkout_area").value;
    var address = document.getElementById("checkout_address").value;
    var note = document.getElementById("checkout_note").value;
    var userdata = "";
    if (localStorage.getItem('user')) {
        userdata = JSON.parse(localStorage.getItem('user'));
    }

    if (email !== "" && address !== "") {
      await instance
        .post("main_home/checkout", {
          name:name,
          phone:phone,
          email:email,
          user_id:userdata[0].user_id,
          district:district,
          delivery_charge:40,
          thana:thana,
          address:address,
          area:area,
          note:note,
          total_amount : cartTotal + 40,
          items:items,
          key: "7fbaf493e3fe38a48934d93a3168926018adb657",
        })
        .then((response) => {
          //document.getElementById("addvendorform").reset();
          window.location.href=response.data;
          console.log(response.data);
          swal("Success!", response, "success");
        });
    } else {
      swal("Warning!", "Please fill all required fields!", "warning");
    }
  };

  return (
    <div className="checkout__section pt-3 pb-5 py-md-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12 col-lg-7">
            <h4 className="checkout__title">{language ? "Shipping Address" : "প্রেরণের ঠিকানা"}</h4>
            <div className="checkout__address">
              <ShipmentForm location={location} />
            </div>
          </div>
          <div className="col-md-6 col-lg-5 col-sm-12 mx-auto">
            <div className="order">
              <h4 className="cart__title">{language ? "Payment Method" : "মূল্যপরিশোধ পদ্ধতি"}</h4>
              <div className="pt-0  pb-4 order-item">
                <div className="d-flex justify-content-between pt-4">
                  <p style={{ fontSize: "18px" }}>{language ? "Net Payable" : "নেট পরিশোধযোগ্য"}</p>
                  <p className="">
                    <small>৳</small> {cartTotal + 40}
                  </p>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="payment"
                    id="delivery"
                  />
                  <label className="form-check-label" for="delivery">
                    
                    {language ? "Cash On Delivery" : "প্রদানোত্তর পরিশোধ"}
                  </label>
                </div>{" "}
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="payment"
                    id="sll-commerce"
                  />
                  <label className="form-check-label" for="sll-commerce">
                     {language ? "Online Payment" : "অনলাইন পেমেন্ট"}
                  </label>
                </div>
                <div className="product-btn mt-3">
                  <button
                    className="btn bg-brand w-100 confirm-btn "
                    onClick={docheckout}
                  >
                    
                    {language ? "Confirm Order" : "আদেশ নিশ্চিত করুন"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
