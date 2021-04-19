import React, { useEffect } from "react";
import "./index.css";
import {
    loadMenuItems,
} from "../../../actions/menuItems";
import BestFromUs from "./BestFromUs";
import BestFromUsSec from "./BestFromUsSec";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";

function BestFrom({ menuItems }) {



    const stableDispatch = useDispatch()


    useEffect(() => {
        stableDispatch(loadMenuItems("offer"));
    }, [stableDispatch]);



    function renderItems() {
        return menuItems.map((item, i) => {

            if (i % 2 === 0) {
                return (
                    <BestFromUs
                        key={i}
                        item={item}
                    />
                );
            } else {
                return (
                    <BestFromUsSec
                        key={i}
                        item={item}
                    />
                )
            };
        });
    }

    return (
        <>
            <div className="bestFromUsContainer">
                <h1>Chef Recommendation's</h1>
                <h2>Fresh Cuts</h2>
                {renderItems()}
            </div>
        </>
    )
};

const mapStateToProps = (state) => ({
    menuItems: state.menuItemReducer.menuItems,
});

export default connect(mapStateToProps)(BestFrom);