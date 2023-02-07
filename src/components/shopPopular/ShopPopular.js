import React from "react";
import { Link } from "react-router-dom";
import Products from "../common/Products";

const ShopPopular = ({ classProps, data }) => {
  // const [data, setData] = useState(null);
 

  // useEffect(() => {
  //  const fetchData = async () => {
  //   const response = await fetch(`./../assets/Data/AllProduct.json`);
  //   const newData = await response.json();
  //   setData(newData);
  //   console.log(newData);
  // };

  // fetchData();

  // }, [])

  // console.log(data);
  return (
    <>
      <section className={`${classProps} shop_popular`}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="heading">Shop by Popular</h2>
              <ul>
                {[
                  "Sofa",
                  "Coffee Table",
                  "Night Stand",
                  "Wall Hangar",
                  "Tea Table",
                  "Chair",
                  "Kitchen Cabinet",
                  "Office Desk"
                ].map((item, index) => (
                  <li key={index}>
                    <Link to="#">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* products */}
            <Products classProps={classProps} data={data} />
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopPopular;
