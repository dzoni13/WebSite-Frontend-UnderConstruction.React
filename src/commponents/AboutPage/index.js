import React from "react";
import "./index.css";
import OurStory from "./our-story/index";
import Team from "./team/index";
import Chef from "./chef/index";
import Galery from "./galery/index";
import Contact from "../ContactForm/index";
import Footer from "../Footer/index";

function AboutPage() {
  return (
    <div>
      <OurStory />
      <Team />
      <Chef />
      <Galery />
      <Contact />
      <Footer />
    </div>
  );
}

export default AboutPage;
