import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import Reservations from "./ReservationTable";
import "../../../index.css";
import "./index.css";

import { loadReservationItems } from "../../../actions/reservation";


const ReservationTable = ({ reservationItem }) => {

    const stableDispatch = useDispatch()


    useEffect(() => {
        stableDispatch(loadReservationItems());
    }, [stableDispatch]);

    function renderItems() {
        return reservationItem.map((item, i) => {
            return (
                <Reservations
                    key={i}
                    item={item}
                />
            );
        });
    }


    return (
        <>
            <div className="adminPanelContainer">

                <div className="adminMenuItemsPanelWraper">

                    <div className="ui grid cardStyleMenuItemsContainer">
                        <table className="ui selectable inverted table">
                            <thead>
                                <tr>
                                    <th colSpan="6">RESERVATIONS</th>

                                </tr>
                            </thead>
                            <tbody>
                                {renderItems()}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};
const mapStateToProps = (state) => ({
    reservationItem: state.reservation.reservationItem,
});

export default connect(mapStateToProps)(ReservationTable);
