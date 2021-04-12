import React, { useState, useEffect } from "react";
import "./index.css";
import {
    loadMenuItems,
} from "../../../actions/menuItems";
import BestFromUs from "./BestFromUs";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";



function BestFrom({ menuItems }) {
    const dispatch = useDispatch();
    console.log(menuItems)

    useEffect(() => {
        dispatch(loadMenuItems("drinks"));
    }, []);

    function renderItems() {
        return menuItems.map((item, i) => {
            return (
                <BestFromUs
                    key={i}
                    item={item}
                />
            );
        });
    }


    return (
        <>

        </>
    )
};

const mapStateToProps = (state) => ({
    menuItems: state.menuItemReducer.menuItems,
});

export default connect(mapStateToProps)(BestFrom);