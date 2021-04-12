import React from "react";
import Footer from "../Footer/index";
import Contact from "../AboutPage/contact/index";
import BookAtable from "./bookAtable";
import Events from "../Events/index";
import BestFromUs from "./bestFromUs";
import Kalendar from "../calendar/index";
import "./index.css";

function LandingPage() {
  return (
    <>
      <div className="landingPagePhotoContainer">
        <div className="landingPageTextContainer">
          <h1>Restaurant</h1>
          <h3>
            Celebrate Your Senses <br></br>And Enyoj Food
          </h3>
        </div>
      </div>
      <BestFromUs />
      <Events />

      <Kalendar />
      <Contact />
      <Footer />
    </>
  );
}

export default LandingPage;
