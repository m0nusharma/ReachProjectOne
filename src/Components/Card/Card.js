import React from "react";
import "./Card.css";

const Card = ( {city, office}) => {
  return (
    <div className=" bodyCard bg-secondary p-5 m-5 ">
      <p className="text-light m-0 fs-6">{city}</p>
      <h3 className="text-light"> {office}</h3>
      <hr
        className="text-white  fw-bolder 
    "
      />
      <div className="info d-flex fs-5 justify-content-between justify-content-center text-white">
        <p className="fs-6"> More info</p>
        <i class="fa-solid fa-arrow-right-long fs-5"></i>
      </div>
    </div>
  );
};

export default Card;
