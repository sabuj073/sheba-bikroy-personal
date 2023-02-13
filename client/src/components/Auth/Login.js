import React from "react";
import { FaTimes } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { GrGooglePlus } from "react-icons/gr";
import { Link, useHistory } from "react-router-dom";
import instance from "../../base_url";
import "./Auth.css";
const Login = () => {
  const history = useHistory();
  const login = async () => {
    document.getElementById("message").innerHTML = "";

    var number = document.getElementById("number").value;
    var password = document.getElementById("password").value;

    if (number !== "" && password !== "") {
      await instance
        .post("main_home/login", {
          key: "7fbaf493e3fe38a48934d93a3168926018adb657",
          number: number,
          password: password,
        })
        .then((response) => {
          if (response.data.length > 0) {
            console.log(response.data[0]);
            localStorage.setItem("user_info", JSON.stringify(response.data[0]));
            document.getElementById("message").innerHTML = "Login Successful";
            history.push("/user/profile");
          } else {
            document.getElementById("message").innerHTML =
              "Invalid Username/Password";
          }
          localStorage.setItem("user", JSON.stringify(response.data));
        });
    } else {
      document.getElementById("message").innerHTML = "Please Fill All Fields";
    }
  };
  return (
    <div className="container pb-4">
      <div className="row">
        <div className="col-md-6 mx-auto align-items-center">
          <div className="sign__form shadow-sm">
            <FaTimes
              onClick={() => history.push("/cart")}
              className="signTimes"
            />
            <h2>Login</h2>
            <p className="sign__form__des">
              Please fill in this from to create an account!
            </p>
            <center>
              <p id="message"></p>
            </center>
            <div className="contact-form">
              <div className="input-group  py-1 mb-3 rounded">
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

              <div className="center">
                <button
                  type="submit"
                  className="mt-2 sign__form__btn"
                  onClick={login}
                >
                  Login
                </button>
              </div>

              <div className="mt-2 text-center ">
                {/* <h5>Or Login With</h5> */}
                <div>
                  {/* <button
                    type="button"
                    className="btn loginPopup__loginWithFbBtn mt-2 me-2"
                  >
                    <FiFacebook className="me-2" />
                    Login With Facebook
                  </button> */}
                  {/* <button
                    type="button"
                    className="btn loginPopup__loginWithGoogleBtn mt-2 py-2 "
                  >
                    <GrGooglePlus className="me-2" />
                    Login With Google
                  </button> */}
                </div>
              </div>

              <p className="text-center pt-3">
                If you have no account please create an account?
                <Link to="/sign-up"> Sign Up Here</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
