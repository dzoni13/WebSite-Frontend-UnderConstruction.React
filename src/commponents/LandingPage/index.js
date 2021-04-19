import React from "react";
import Footer from "../Footer/index";
import Contact from "../ContactForm/index";
import Events from "../Events/index";
import BestFromUs from "./bestFromUs";
import "./index.css";
import BookTable from "../BookTable";


function LandingPage() {
    return (
        <>
            <div className="landingPagePhotoContainer">
                <div className="landingPageTextContainer">
                    <h1 className="landingTxt">Restaurant</h1>
                    <h3> Celebrate Your Senses <br></br>And Enyoj Food </h3>
                </div>
            </div>
            <BestFromUs />
            <BookTable />
            <Events />
            <Contact />
            <Footer />

        </>
    );
}

export default LandingPage;
