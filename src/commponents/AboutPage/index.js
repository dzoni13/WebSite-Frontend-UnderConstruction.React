import React from "react";
import "./index.css";
import OurStory from "./our-story/index";
import TeamMembers from "../TeamMembers/index";
import OurHistory from "./chef/index";
import Galery from "./galery/index";
import Contact from "../ContactForm/index";
import Footer from "../Footer/index";

function AboutPage() {
    return (
        <div>
            <OurStory />
            <OurHistory />
            <TeamMembers />
            <Galery />
            <Contact />
            <Footer />
        </div>
    );
}

export default AboutPage;
