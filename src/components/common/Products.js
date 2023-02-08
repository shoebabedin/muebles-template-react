import React, { useState } from "react";
import { Link } from "react-router-dom";

const Products = ({ classProps, data }) => {
  const SIngleProduct = ({ item }) => {
    const [heart, setHeeart] = useState(false);
    

    const { id, img, name, price, discountPrice } = item;

    return (
      <div key={id} className="col-lg-3 col-md-6">
        <div className="image">
          <span className="heartClick" onClick={() => setHeeart(!heart)}>
            <i className={`ph-heart ${heart ? "ph-heart-fill" : ""}`}></i>
          </span>
          <img
            className="img-fluid"
            src={require(`./../../assets/images/all-products/${img}.png`)}
            alt=""
          />
        </div>

        <Link to="/single-product">
          <h4>{name}</h4>
        </Link>
        <div className="price">
          {classProps ? (
            <>
              <p className="regular_price">
                <del>$ {price}</del>
              </p>

              <p className="update_price">$ {price}</p>
            </>
          ) : (
            <p className="regular_price">$ {discountPrice}</p>
          )}
        </div>
      </div>
    );
  };

  return (
    <>
      {data?.map((item, i) => (
        <SIngleProduct key={i} item={item} />
      ))}
    </>
  );
};

export default Products;
