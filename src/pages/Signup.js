import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="signup">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="modal-header border-0">
              <Link className="navbar-brand mx-auto" to="/">
                <img src={require("./../assets/images/logo/logo.png")} alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 desktop">
            <img
              className="img-fluid"
              src={require("./../assets/images/signup/signup.png")}
              alt=""
            />
          </div>
          <div className="col-lg-6">
            <h2 className="heading">Create Your Account</h2>
            <div className="auth_btn">
              <button className="auth_google">
                <img src={require("./../assets/images/signup/google.png")} alt="" />
                Sign Up with Google
              </button>
              <button className="auth_facebook">
                <img src={require("./../assets/images/signup/facebook.png")} alt="" />
                Sign Up with Facebook
              </button>
            </div>
            <p className="desc">Or sign up using your email address</p>
            <form action="">
              <div className="row">
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label
                      for="exampleFormControlInput1"
                      className="form-label"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="First Name"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label
                      for="exampleFormControlInput1"
                      className="form-label"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label
                      for="exampleFormControlInput1"
                      className="form-label"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Your Email"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label
                      for="exampleFormControlInput1"
                      className="form-label"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Password"
                    />
                  </div>
                </div>
                <div className="col-lg-12 text-center">
                  <div className="mb-3 termsCondition">
                    <input type="checkbox" id="terms" />
                    <label for="terms" className="form-label">
                      I accept the
                      <Link to="#!">Terms and Conditions</Link>
                    </label>
                  </div>
                </div>
                <div className="col-12 text-center">
                  <button type="submit" className="btn">
                    Sign Up
                  </button>
                  <p className="auth_page_link">
                    Don’t have an account? <a href="./signin.html">Sign In</a>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
