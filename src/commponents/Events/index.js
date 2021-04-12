import React, { useState, useEffect } from "react";
import EventsCard from "./eventsCard";
import "./index.css";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import { loadEventItems } from "../../actions/events";


const Events = ({ eventsItem }) => {

    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(loadEventItems());
    }, []);

    function renderItems() {
        return eventsItem.map((item, i) => {
            console.log("RENDER ITEMS, EVENT CARD: ", item)

            return (
                <EventsCard
                    key={i}
                    item={item}
                />
            )
        })
    }


    return (
        <>
            <p className="upcomingEventsStyle">Upcoming Events</p>
            <div className="ui three column grid landingPageEventsContainer">

                {renderItems()}
            </div>



        </>)
};

const mapStateToProps = (state) => ({
    eventsItem: state.eventsReducer.eventsItem,
});

export default connect(mapStateToProps)(Events);
