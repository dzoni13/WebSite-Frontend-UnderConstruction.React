import React, { Fragment } from "react";
import logo from "./images/logo.jpg";
import "./index.css";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { logout } from "../../actions/auth";

function Header({ auth: { isAuthenticated, loading }, logout }) {
    const myFunction = () => {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    };
    const authLinks = (
        <div className="topnav" id="myTopnav">
            <a onClick={logout} href="#!">
                Logout
      </a>
            <a href="reservations">Reservations</a>
            <a href="events">Admin Panel</a>
            <a href="#!" className="icon" onClick={myFunction}>
                <i className="fa fa-bars" aria-hidden="true"></i>
            </a>
            <a href="menu">Menu</a>
            <a href="about">About</a>
            <a href="/" className="active">
                Home
      </a>

            <img src={logo} alt="logo img"></img>
        </div>
    );

    const guestLinks = (
        <div className="topnav" id="myTopnav">
            <a href="menu">Menu</a>
            <a href="about">About</a>
            <a href="/" className="active">
                Home
      </a>

            <a href="#!" className="icon" onClick={myFunction}>
                <i className="fa fa-bars" aria-hidden="true"></i>
            </a>
            <img src={logo} alt="logo img"></img>
        </div>
    );

    return (
        <nav>
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
            ></link>
            {!loading && (
                <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
            )}
        </nav>
    );
}

Header.propTypes = {
    logout: propTypes.func.isRequired,
    auth: propTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Header);
