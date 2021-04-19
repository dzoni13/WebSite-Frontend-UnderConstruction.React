import "./ReservationTable.css";
import React, { useState } from "react";
import { NotificationManager } from 'react-notifications';

import { useDispatch } from "react-redux";

import {
    loadReservationItems,
    editResItem,
    deleteReservation
} from "../../../actions/reservation";

const initialState = {
    _id: null,
    note: "",
}


function Reservations(props) {
    const dispatch = useDispatch();

    const date = props.item.date.length > 10 ? props.item.date.substr(0, 10) : props.item.date

    const [editableItem, setEditableItem] = useState(props.item);

    const [approved, setApproved] = useState(true)

    function onChange(event) {
        setEditableItem({
            ...editableItem,
            [event.target.name]: event.target.value,
        });
    }

    function editItem(item) {

        setApproved(false);

        setEditableItem({
            _id: props.item._id,
            note: props.item.note,
        });
    }

    function saveMenuItemEdit(item) {
        if (item?._id === null) {
            NotificationManager.error('Please Select Item To Edit.')
        } else {
            editResItem(item).then(() => {
                NotificationManager.success('Item Edited Succesfuly')
                dispatch(loadReservationItems())
                setEditableItem(initialState)
            });
        }
    }

    function deleteItem(item) {
        deleteReservation(item).then(() => {
            dispatch(loadReservationItems());
        });
    }

    return (
        < tr >
            <td><i className="calendar alternate outline icon"></i> {date}</td>
            <td><i className="clock outline icon"></i> {props.item.time}</td>
            <td><i className="male icon"></i> {props.item.party_size}</td>
            <td><i className="phone icon"></i> {props.item.mobile_number}</td>
            <td><i className="file alternate outline icon"></i>  <input
                className="noteBox"

                disabled={approved}

                onChange={(e) => onChange(e)}
                value={editableItem.note}
                type="text"
                placeholder={props.item.note}
                name="note"
            >
            </input></td>

            <td>
                <div className="ui basic teal  button  adminPanelButton" onClick={event => editItem(props.item)}><i className="edit outline icon"></i></div>
                <button className="ui basic green button adminPanelButton" onClick={(event) => saveMenuItemEdit(editableItem)}> <i className="save icon"></i></button>
                <div className="ui basic red button  adminPanelButton" onClick={(e) => { if (window.confirm('Are you sure you wish to delete this item?')) deleteItem(props.item) }}> <i className="trash alternate outline icon"></i></div>
            </td>
        </tr >
    )
};

export default Reservations;