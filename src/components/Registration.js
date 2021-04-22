import React, {useState} from "react";
import { Link } from "react-router-dom";
import amazonLogoImage from "../images/Amazon_logo.png";

const Registration = () => {
  const [customer, setCustomer] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const submitForm = (event) => {

    event.preventDefault();

    fetch("https://tranquil-peak-03364.herokuapp.com/registration", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(customer),
    })
      .then((res)=>res.json())
      .then((data)=>{
        //alert(`The user named ${data.fullName} successfully added into db.`)
        setCustomer({
          fullName: "",
          email: "",
          password: "",
          confirmPassword: "",
        })
      })
      .catch((err) => console.log(`Error ${err}`));
  };

  return (
    <div className="registration">
      <div>
        <Link to="/">
          <img
            className="login__amazonIcon"
            src={amazonLogoImage}
            alt="amazon logo"
          />
        </Link>
      </div>
      <div className="registration__container">
        <form action="/login" className="registration__form" onSubmit={submitForm}>
          <div className="registration__heading">
            <h1>Welcome to Amazon Clone</h1>
            <p>Fill out the form to get started.</p>
          </div>

          <div>
            <label htmlFor="signupNamme" className="registration__userName">
              Your name
            </label>
            <input
              className="registration__nameInput"
              value={customer.fullName}
              type="text"
              name="name"
              id="signupNamme"
              placeholder="Your full name"
              aria-label="Your full name"
              required
              data-msg="Please enter a valid name."
              onChange={(event) => {
                setCustomer({
                  ...customer,
                  fullName: event.target.value,
                });
              }}
            />
          </div>

          <div>
            <label
              htmlFor="signinSrEmail"
              className="registration__emailAddress"
            >
              Email address
            </label>
            <input
              className="registration__emailAddressInput"
              value={customer.email}
              type="email"
              name="email"
              id="signinSrEmail"
              placeholder="Email address"
              aria-label="Email address"
              required
              data-msg="Please enter a valid email address."
              onChange={(event) => {
                setCustomer({
                  ...customer,
                  email: event.target.value,
                });
              }}
            />
          </div>

          <div>
            <label
              htmlFor="signinSrPassword"
              className="registration__password"
            >
              Password
            </label>
            <input
              className="registration__passwordInput"
              value={customer.password}
              type="password"
              name="password"
              id="signinSrPassword"
              placeholder="********"
              aria-label="********"
              required
              data-msg="Your password is invalid. Please try again."
              onChange={(event) => {
                setCustomer({
                  ...customer,
                  password: event.target.value,
                });
              }}
            />
          </div>

          <div>
            <label
              htmlFor="signinSrConfirmPassword"
              className="registration__confirmPassword"
            >
              Confirm password
            </label>
            <input
              className="registration__passwordInput"
              value={customer.confirmPassword}
              type="password"
              name="confirmPassword"
              id="signinSrConfirmPassword"
              placeholder="********"
              aria-label="********"
              required
              data-msg="Password does not match the confirm password."
              onChange={(event) => {
                setCustomer({
                  ...customer,
                  confirmPassword: event.target.value,
                });
              }}
            />
          </div>

          <div>
            <div className="registration__terms">
              <input
                type="checkbox"
                id="termsCheckbox"
                name="termsCheckbox"
                required=""
                data-msg="Please accept our Terms and Conditions."
              />
              <label htmlFor="termsCheckbox" className="registration__account">
                <small>
                  I agree to the
                  <a href="#!">Terms and Conditions</a>
                </small>
              </label>
            </div>
          </div>

          <div>
            <div>
              <span className="registration__account">
                Already have an account?
              </span>
              <Link to="/login" className="registration__account">
                Login
              </Link>
            </div>

            
            <div>
              <button type="submit" className="registration__button">
                Sign Up
              </button>
            </div>
            
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
