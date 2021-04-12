import React from "react";
import "./index.css";

function BookAtable() {
  return (
    <>
      <p className="makeReservationStyle">Make a Reservation</p>
      <div className="containerInput">
        <div className="ui action input inputStyle">
          <select className="ui compact selection dropdown inputDropdownStyle">
            <option value="all">Date</option>
            <option selected="" value="articles">
              Articles
            </option>
            <option value="products">Products</option>
          </select>
        </div>
        <div className="ui action input inputStyle">
          <select className="ui compact selection dropdown inputDropdownStyle">
            <option value="all">Time</option>
            <option selected="" value="articles">
              Articles
            </option>
            <option value="products">Products</option>
          </select>
        </div>
        <div className="ui action input inputStyle">
          <select className="ui compact selection dropdown inputDropdownStyle">
            <option value="all">Party Size</option>
            <option selected="" value="articles">
              Articles
            </option>
            <option value="products">Products</option>
          </select>
        </div>
        <button className="ui button">Submit</button>
      </div>
    </>
  );
}

export default BookAtable;
