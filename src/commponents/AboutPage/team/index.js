import React from "react";
import "./index.css";
import Image1 from "./images/img1.JPG";
import Image2 from "./images/img2.JPG";
import Image3 from "./images/img3.JPG";
import Image4 from "./images/img4.JPG";
import Image5 from "./images/img5.JPG";
import Image6 from "./images/img6.JPG";

function Team() {
  return (
    <div className="main-our-team">
      <div className="container-one">
        <h2>The Team</h2>
        <h4>Key Players</h4>
      </div>
      <div className="container-two">
        <div className="box1">
          <img src={Image1} alt="img"></img>
          <h3>John Jack</h3>
          <h4>Walter</h4>
          <h1></h1>
        </div>
        <div className="box2">
          <img src={Image2} alt="img"></img>
          <h3>Jacky Evens</h3>
          <h4>Event Coordinator</h4>
          <h1></h1>
        </div>
        <div className="box3">
          <img src={Image3} alt="img"></img>
          <h3>Zack Smith</h3>
          <h4>Chef</h4>
          <h1></h1>
        </div>
        <div className="box4">
          <img src={Image4} alt="img"></img>
          <h3>Kris Ward</h3>
          <h4>Bartender</h4>
          <h1></h1>
        </div>
        <div className="box5">
          <img src={Image5} alt="img"></img>
          <h3>Taylor Quill</h3>
          <h4>Event Coordinator</h4>
          <h1></h1>
        </div>
        <div className="box6">
          <img src={Image6} alt="img"></img>
          <h3>Jordan Parker</h3>
          <h4>Sous Chef</h4>
          <h1></h1>
        </div>
      </div>
    </div>
  );
}

export default Team;
