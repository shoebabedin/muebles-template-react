import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import ProfileSideNav from "../components/Accounts/ProfileSideNav";
import TrackOrderComponents from "../components/Accounts/TrackOrderComponents";
import Breadcrumb from "../components/common/Breadcrumb";

const TrackOrder = () => {
  const location = useLocation();
  const str = document.location.toString();
  const locationSplit = str.split("/");
  const bradecumName = locationSplit[3];
  return (
    <>
    <Helmet>
        <title>{bradecumName}</title>
      </Helmet>
      <div className="profile checkout_process_modal view_cart_modal">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <ProfileSideNav active={bradecumName} />
            </div>
            <div className="col-lg-9 signup">
              <div className="profile_body">
                <Breadcrumb title={bradecumName} />

                <h4>{bradecumName}</h4>
                <p>Current Stauts of your Order</p>
                <TrackOrderComponents />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrackOrder;
