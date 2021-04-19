import React, { useEffect } from "react";
import "./index.css";
import { loadAllMenuItems } from "../../actions/menuItems";
import MenuItems from "./MenuItems";
import Footer from '../Footer/index';
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import drinkImg from "./image/drinksPhoto.jpg";
import startImg from "./image/starterPhoto.jpg";
import mainImg from "./image/mainPhoto.jpg";

function MenuPage({ menuItems }) {

    const stableDispatch = useDispatch()

    useEffect(() => {
        stableDispatch(loadAllMenuItems("offer"));
    }, [stableDispatch]);



    function renderItemsByTag(tag) {
        const list = menuItems.filter(item => item.tag === tag)
        return list.map((item, i) => {
            return (
                <MenuItems
                    key={i}
                    item={item}

                />
            );
        });
    }

    return (
        <>

            <div>
                <div className="menuContainerImg"> <div className="overlayMenuPhoto">
                    <h2>Delicious Cousine</h2>
                    <h1>DISCOVER THE MENU</h1>
                </div></div>

                <div className="ui stackable four column grid menuPageStyleContainer">
                    <div className="menuLandingText">
                        <h2>Will you think</h2>
                        <h1>REFRESHMENT</h1>
                        <div className="menuParagrph">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sollicitudin sem a ipsum maximus efficitur.
                        Donec tempor vestibulum tortor. Pellentesque id metus vel dolor venenatis tincidunt. Nam eget posuere odio, sed luctus libero.</p>
                        </div>
                    </div>
                    <div className="menuText">
                        <div className="drinksPhoto">
                            <img alt="drink" src={drinkImg} /></div>
                        <h4>DRINKS</h4>
                    </div>
                    <div className="renderContainer">
                        {renderItemsByTag("drinks")}
                    </div>
                    <div className="menuLandingText">
                        <h2>For start</h2>
                        <h1>APPETIZERS</h1>
                    </div>
                    <div className="menuText">
                        <div className="drinksPhoto">
                            <img alt="drink" src={startImg} /></div>
                        <h4>STARTERS</h4>
                    </div>
                    <div className="renderContainer">

                        {renderItemsByTag("appetizers")}
                    </div>
                    <div className="menuLandingText">
                        <h2>More concrete</h2>
                        <h1>ALA CARTE</h1>
                    </div>
                    <div className="menuText">
                        <div className="drinksPhoto">
                            <img alt="drink" src={mainImg} /></div>
                        <h4>MAIN DISHES</h4>
                    </div>
                    <div className="renderContainer">

                        {renderItemsByTag("ala_carte")}
                    </div>

                </div>
            </div>

            <Footer />
        </>
    )
};

const mapStateToProps = (state) => ({
    menuItems: state.menuItemReducer.menuItems,
});

export default connect(mapStateToProps)(MenuPage);