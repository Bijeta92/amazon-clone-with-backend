import React, {useState} from "react";
import { Link } from "react-router-dom";
import amazonLogoImage from "../images/Amazon_logo.png";

const Login = () => {

  const [customer, setCustomer] = useState({
    email:"",
    password:""
  });

  const signIn = () =>{
    
  }

  return (
    <div className="login">
      <div>
        <Link to="/">
          <img
            className="login__amazonIcon"
            src={amazonLogoImage}
            alt="amazon logo"
          />
        </Link>
      </div>
      <div className="login__container">
        <form action="" className="login__form" >
          <div className="login__heading">
            <h1>Sign-In</h1>
          </div>
          <div className="login__formSection">
            <div className="login__emailDiv">
              <label htmlFor="signinSrEmail" className="login__emailAddress">
                Email
              </label>
              <input
                className="login__emailInput"
                value={customer.email}
                type="email"
                name="email"
                id="signinSrEmail"
                placeholder="Email address"
                aria-label="Email address"
                required
                data-msg="Please enter a valid email address."
                onChange={(event)=>setCustomer({
                    ...customer,
                    email:event.target.value
                  })}
                
              />
            </div>

            <div>
              <label htmlFor="signinSrPassword" className="login__password">
                <span>
                  Password
                  
                </span>
              </label>
              <input
                className="login__passwordInput"
                value={customer.password}
                type="password"
                name="password"
                id="signinSrPassword"
                placeholder="********"
                aria-label="********"
                required
                data-msg="Your password is invalid. Please try again."
                onChange={(event)=>setCustomer({
                  ...customer,
                  password:event.target.value
                })}
              />
            </div>

            <div>
              <div>
                <span className="login__account">Don't have an account? </span>
                <Link to="/registration"  className="login__account" >
                  Signup
                </Link>
              </div>

              <Link to="/">
              <div>
                <button type="submit" className="login__button">
                  Login
                </button>
              </div>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
