import React, { useState, useEffect } from "react";
import "./index.css";
import {
    loadMenuItems,
} from "../../actions/menuItems";
import Footer from '../Footer/index';
import Contact from "../ContactForm/index";
import MenuItems from "./MenuItems";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";



function MenuPage({ menuItems }) {
    const dispatch = useDispatch();
    console.log(menuItems)

    useEffect(() => {
        dispatch(loadMenuItems("drinks"));
    }, []);

    function renderItemsByTag() {
        return menuItems.map((item, i) => {
            return (
                <MenuItems
                    key={i}
                    item={item}

                />
            );
        });
    }

    function getMenuItemByTag(tag) {
        console.log("Get Item Tag:", tag);

        dispatch(loadMenuItems(tag));
    }

    return (
        <>
            <div className="selectMenyStyle">
                <div className="selectTipeOfMenulStyle">
                    <button className="selectTipeOfMenuButton" onClick={(event) => getMenuItemByTag("drinks")}>Drinks</button>
                </div>
                <div className="selectTipeOfMenulStyle">
                    <button className="selectTipeOfMenuButton" onClick={(event) => getMenuItemByTag("appetizers")}>Appetizers</button>
                </div>
                <div className="selectTipeOfMenulStyle">
                    <button className="selectTipeOfMenuButton" onClick={(event) => getMenuItemByTag("ala_carte")}>Hot Dishes</button>
                </div>
            </div>
            <div>
                <div className="ui stackable four column grid menuStyleContainer">
                    {renderItemsByTag()}
                </div>
            </div>
            <Contact />

            <Footer />
        </>
    )
};

const mapStateToProps = (state) => ({
    menuItems: state.menuItemReducer.menuItems,
});

export default connect(mapStateToProps)(MenuPage);