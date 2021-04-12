import React from "react";
import "./index.css";
import Image from "./images/pasta1.jpg";
function OurStory() {
  return (
    <div className="main-our-story">
      <img src={Image} alt="pasta" />
      <div className="centered">
        <h3>Our Story</h3>
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

export default OurStory;
