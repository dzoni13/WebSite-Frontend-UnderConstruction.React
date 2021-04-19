import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

function DropDown() {
    return (
        <>
            <div className="dropdown">
                <button className="dropbtn">Select Admin Panel
                <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-content">
                    <Link to="/events">Events Panel</Link>
                    <Link to="/menuPanel">Menu Panel</Link>
                    <Link to="/team">Team Panel</Link>
                    <Link to="/specialOffer">Offer Panel</Link>
                </div>
            </div>

        </>
    );
}

export default DropDown;
