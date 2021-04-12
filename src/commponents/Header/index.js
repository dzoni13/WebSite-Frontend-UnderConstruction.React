import React from "react";
import { Link } from "react-router-dom";
import logo from "./images/logo.JPG";
import "./index.css";

function Header() {
    const myFunction = () => {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    };

    return (
        <nav>
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
            ></link>
            <div className="topnav" id="myTopnav">
                <a href="menu">Menu</a>
                <a href="about">About</a>
                <a href="carrers">Carrers</a>
                <a href="/" className="active">
                    Home
        </a>

                <a href="events">Admin Panel</a>
                <a href="javascript:void(0);" className="icon" onClick={myFunction}>
                    <i className="fa fa-bars" aria-hidden="true"></i>
                </a>
                <img src={logo} alt="logo img"></img>
            </div>
        </nav>
    );

}

export default Header;
