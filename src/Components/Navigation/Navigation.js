import React from "react";
import "./Navigation.css";

const Navigation = ({ titleone, titletwo, titlethree, titlefour }) => {
  return (
    <div className="nav  ">
      <h3 className="logo">Apartment</h3>
      <div className="details d-flex gap-5">
        <span className="NavItem"> {titleone}</span>
        <span className="NavItem"> {titletwo}</span>
        <span className="NavItem"> {titlethree}</span>
        <span className="NavItem"> {titlefour}</span>
      </div>
      <i className="fa-solid fa-magnifying-glass fs-5  NavItem"></i>
    </div>
  );
};

export default Navigation;
