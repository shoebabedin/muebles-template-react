import React from 'react';
import { useLocation } from 'react-router-dom';
import PaymentComponents from '../components/Accounts/PaymentComponents';
import ProfileSideNav from '../components/Accounts/ProfileSideNav';
import Breadcrumb from '../components/common/Breadcrumb';

const PaymentOption = () => {
    const location = useLocation();
  const str = document.location.toString();
  const locationSplit = str.split("/");
  const bradecumName = locationSplit[3];
  return (
    <>
      <div className="profile">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <ProfileSideNav active={bradecumName} />
            </div>
            <div className="col-lg-9 signup">
              <div className="profile_body">
                <Breadcrumb title={bradecumName} />

                <h4>{bradecumName}</h4>
                <p>Add or view current payment options</p>
                <PaymentComponents />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentOption;