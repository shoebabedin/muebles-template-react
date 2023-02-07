import React from "react";
import { Link } from "react-router-dom";

const HomeHero = () => {
  return (
    <section className="hero">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="image">
              <img
                className="img-fluid"
                src={require("./../../assets/images/hero/hero-bg.webp")}
                alt=""
              />
              <div className="overlay">
                <h2>Living & Bed Room</h2>
                <Link to="./pages/shop-all-product.html" className="shop_collection">
                  Shop Collection
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
