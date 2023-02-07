import React from 'react';
import { useLocation } from 'react-router-dom';
import ProfileSideNav from '../components/Accounts/ProfileSideNav';
import ReviewsComponents from '../components/Accounts/ReviewsComponents';
import Breadcrumb from '../components/common/Breadcrumb';

const Reviews = () => {
    const location = useLocation();
    const str = document.location.toString();
    const locationSplit = str.split("/");
    const bradecumName = locationSplit[3];
    return (
        <>
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
                <p>You can add review for your products you purchased</p>
                <ReviewsComponents />
              </div>
            </div>
          </div>
        </div>
      </div>  
        </>
    );
};

export default Reviews;