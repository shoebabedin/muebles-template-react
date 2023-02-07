import { BrowserRouter, Route, Routes } from "react-router-dom";
// bootstrap css & js
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// bootstrap css & js
import "./App.css";
import CommingSoon from "./components/common/CommingSoon";
import Layout from "./components/common/Layout";
import NoPage from "./components/common/NoPage";
import About from "./pages/About";
import BillingAddress from "./pages/BillingAddress";
import CheckOutProcess from "./pages/CheckOutProcess";
import ExchangeReturn from "./pages/ExchangeReturn";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Order from "./pages/Order";
import PaymentOption from "./pages/PaymentOption";
import PaymentPolicy from "./pages/PaymentPolicy";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Profile from "./pages/Profile";
import Reviews from "./pages/Reviews";
import ShippingPolicy from "./pages/ShippingPolicy";
import ShopAllProduct from "./pages/ShopAllProduct";
import Signup from "./pages/Signup";
import SingleProduct from "./pages/SingleProduct";
import TermsCondition from "./pages/TermsCondition";
import TrackOrder from "./pages/TrackOrder";
import VerifyEmail from "./pages/VerifyEmail";
import ViewCart from "./pages/ViewCart";
import WishList from "./pages/WishList";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about-us" element={<About />} />
            <Route path="shop-all-product" element={<ShopAllProduct />} />
            <Route path="terms-condition" element={<TermsCondition />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="shipping-policy" element={<ShippingPolicy />} />
            <Route path="payment-policy" element={<PaymentPolicy />} />
            <Route path="exchange-return" element={<ExchangeReturn />} />
            <Route path="profile" element={<Profile />} />
            <Route path="billing-address" element={<BillingAddress />} />
            <Route path="payment-option" element={<PaymentOption />} />
            <Route path="track-order" element={<TrackOrder />} />
            <Route path="order" element={<Order />} />
            <Route path="wishlist" element={<WishList />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="single-product" element={<SingleProduct />} />
            <Route path="*" element={<NoPage />} />
          </Route>
          <Route path="/check-out-process" element={<CheckOutProcess />} />
          <Route path="/comming-soon" element={<CommingSoon />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/verify-email" element={<VerifyEmail />} />
          <Route path="/view-cart" element={<ViewCart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
