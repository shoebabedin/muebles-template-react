import React from "react";
import { Link, useLocation } from "react-router-dom";
import TermsConditionPage from "../components/common/TermsConditionPage";

const ShippingPolicy = () => {
  const location = useLocation();

  const str = document.location.toString();
  const locationSplit = str.split("/");
  const bradecumName = locationSplit[3];
  return (
    <>
      <div className="terms_condition_hero">
        <div className="container">
          <div className="row">
            <div className="col-12">
            <h2 className="heading">{bradecumName}</h2>
              <p className="version">Version 14.123.1</p>
              <p className="lastUpdate">Last updated May 2022</p>
              <p className="replaceVersion">
                Replaces the April 2022 version
                <Link to="#">(see previous version)</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="terms_condition_page">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3">
              <ul className="term_side_nav">
              <li className={`${bradecumName === 'terms-condition' && 'active'}`}>
                  <Link to="/terms-condition">Terms & Conditions</Link>
                </li>
                <li className={`${bradecumName === 'privacy-policy' && 'active'}`}>
                  <Link to="/privacy-policy">Privacy Policy</Link>
                </li>
                <li className={`${bradecumName === 'payment-policy' && 'active'}`}>
                  <Link to="/payment-policy">Payment Policy</Link>
                </li>
                <li className={`${bradecumName === 'exchange-return' && 'active'}`}>
                  <Link to="/exchange-return">Exchange & Return</Link>
                </li>
                <li className={`${bradecumName === 'shipping-policy' && 'active'}`}>
                  <Link to="/shipping-policy">Shipping Policy</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-9">
             <TermsConditionPage/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShippingPolicy;
