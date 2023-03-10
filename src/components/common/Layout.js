import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import CartCanvas from "./CartCanvas";
import Footer from "./Footer";
import Header from "./Header";
import Preloader from "./Preloader";
import StickyMobileNav from "./StickyMobileNav";
import ToTopBtn from "./ToTopBtn";

const Layout = (props) => {
  const [show, setShow] = useState(false);
  const location = useLocation();
  const reload = location.pathname;

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, [reload]);

  const handleShow = () => {
    setShow(true);
  };
  return (
    <div className="main">
      <Preloader />
      <Header handleShow={handleShow} />
      <Outlet />
      <Footer />
      <ToTopBtn />
      <StickyMobileNav handleShow={handleShow} />
      <CartCanvas show={show} setShow={setShow} />
    </div>
  );
};

export default Layout;
