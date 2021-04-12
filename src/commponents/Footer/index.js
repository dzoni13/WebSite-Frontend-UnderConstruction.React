import React from "react";
import "./index.css";

function Footer() {
  return (
    <div className="main-footer">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <div className="icons"></div>
      <div className="footer-text">
        <i class="fa fa-facebook" aria-hidden="true"></i>

        <i class="fa fa-twitter"></i>
        <i className="fa fa-linkedin" aria-hidden="true"></i>
        <h5>©2021 by Restaurant. Proudly created with ProceraSoft</h5>
      </div>
      <div className="finish">
        <p></p>
      </div>
    </div>
  );
}

export default Footer;
