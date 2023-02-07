import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({title}) => {
  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="#">Account</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {title}
          </li>
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumb;
