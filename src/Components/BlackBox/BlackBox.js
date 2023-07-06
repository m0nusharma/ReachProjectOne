import React from "react";
import "./BlackBox.css";

const BlackBox = ({
  Title,
  titletwo,
  titlethree,
  titlefour,
  caption,
  captiontwo,
  captionthree,
  captionfour,
}) => {
  return (
    <div className="Black bg-dark p-5 w-100 ">
      <div className="line text-light "></div>
      <h3 className="amaz pt-2 ">
        Amazing <br />
      </h3>

      <div className="BlackCap text-light mt-5 row  ">
        <span className=" col-sm-3 col-xs-12 p-1 " >
          <h6 className="fSize m-0">{Title}</h6>
          <p className="fSize fs-6 m-0">{caption}</p>
        </span>
        <span className=" col-sm-3 col-xs-12 p-1">
          <h6 className="fSize m-0">{titletwo}</h6>
          <p className="fSize m-0 fs-6">{captiontwo}</p>
        </span>
        <span className=" col-sm-3 col-xs-12 p-1">
          <h6 className="fSize m-0">{titlethree}</h6>
          <p className="fSize m-0 fs-6">{captionthree}</p>
        </span>
        <span className=" col-sm-3 col-xs-12 p-1">
          <h6 className="fSize m-0">{titlefour}</h6>
          <p className="fSize m-0 fs-6">{captionfour}</p>
        </span>
      </div>
    </div>
  );
};

export default BlackBox;
