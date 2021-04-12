import React from "react";
import "./index.css";
import Image from "./images/pasta2.jpg";
function Chef() {
  return (
    <div className="main-chef">
      <img src={Image} alt="pasta" />
      <div className="centered2">
        <h3>Chef</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
    </div>
  );
}

export default Chef;
