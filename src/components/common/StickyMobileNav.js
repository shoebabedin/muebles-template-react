import React from "react";
import { Link } from "react-router-dom";

const StickyMobileNav = (props) => {
  

  return (
    <>
      <section className="mobile_nav mob_nav">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <ul className="mobile_sticky_nav">
                <li className="">
                  <Link className="active" to="/">
                    <i className="ph-house"></i>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <i className="ph-heart"></i>
                    Wishlist
                  </Link>
                </li>
                <li>
                  <Link to="#!"
                    className="nav-link border-0 bg-transparent"
                    onClick={props.handleShow}
                  >
                    <i className="ph-handbag"></i>
                    Cart
                  </Link>
                </li>
                <li className="">
                  <Link to="/">
                    <i className="ph-user"></i>
                    Account
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StickyMobileNav;
