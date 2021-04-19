import { useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import EventItem from "./EventItem";
import DropDown from "../DropDown/index";
import "./index.css";
import { NotificationManager } from 'react-notifications';
import { connect } from "react-redux";
import {
    loadEventItems,
    addEditItem,
    editMenuItem,
    deleteMenuItem,
} from "../../../actions/events";


const initialState = {
    _id: null,
    title: "",
    description: "",
    time: "",
    date: "",
    image: "",
    tag: "event"
}

const EventsPanel = ({ eventsItem }) => {
    const dispatch = useDispatch();

    const stableDispatch = useDispatch()


    const [adminDisplayClass, setAdminDisplayClass] = useState("adminPanel");

    const [editableItem, setEditableItem] = useState(initialState);

    useEffect(() => {
        stableDispatch(loadEventItems());
    }, [stableDispatch]);

    function renderItems() {
        return eventsItem.map((item, i) => {
            return <EventItem key={i} item={item} editItem={editItem} deleteItem={deleteItem} />;
        });
    }

    function onChange(event) {
        setEditableItem({
            ...editableItem,
            [event.target.name]: event.target.value,
        });
    }

    function addItemMenu(item) {
        if (item.title === "") {
            NotificationManager.error('Please enter title.')
        } else {
            dispatch(addEditItem(editableItem)).then(() => {
                dispatch(loadEventItems());
                setEditableItem(initialState);
            });
        }
    }


    function saveMenuItemEdit(item) {
        if (item._id === null) {
            NotificationManager.error('Please Select Item To Edit.')
        } else {
            editMenuItem(item).then(() => {
                NotificationManager.success('Item Edited Succesfuly')
                dispatch(loadEventItems())
                setEditableItem(initialState)
            });
        }
    }

    function editItem(item) {
        if (window.innerWidth < 600) {
            setAdminDisplayClass("adminPanelDisplay");
        }
        setEditableItem({
            ...editableItem,
            _id: item._id,
            title: item.title,
            description: item.description,
            time: item.time,
            date: item.date,
            image: item.image,
        });
    }

    function deleteItem(item) {
        deleteMenuItem(item).then(() => {
            dispatch(loadEventItems());
        });
    }

    function openForm() {
        if (window.innerWidth < 600) {
            setAdminDisplayClass("adminPanelDisplay");
        }
    }

    function closeForm() {
        setAdminDisplayClass("adminPanel");
    }

    return (
        <><div className="adminPanelContainer">
            <div>
                <DropDown />
                <button className="ui teal button buttonAddMobil" onClick={(event) => openForm()}> Add </button>
            </div>
            <div className="adminMenuItemsPanelWraper">
                <div className="ui grid cardStyleMenuItemsContainer">
                    {renderItems()}
                </div>

                <div className={adminDisplayClass}>
                    <div className="buttonCloseFormContainer">
                        <button className=" buttonCloseForm" onClick={(event) => closeForm()}><i className="close icon"></i></button>
                    </div>

                    <div className="ui form formWrapper">
                        <div className="field">
                            <input
                                type="text"
                                name="title"
                                placeholder="Title..."
                                onChange={(e) => onChange(e)}
                                value={editableItem.title} />
                        </div>

                        <div className="field">
                            <textarea
                                className="textArea"
                                rows="2"
                                onChange={(e) => onChange(e)}
                                value={editableItem.description}
                                type="text"
                                placeholder="Description..."
                                name="description"
                            >
                                {" "}
                            </textarea>
                        </div>

                        <div className="field">
                            <div className="ui right labeled input">
                                <label htmlFor="amount" className="ui label labelStyle">
                                    <i className="clock outline icon timeIcon" />
                                </label>
                                <input
                                    type="text"
                                    placeholder="Time..."
                                    name="time"
                                    className="ui right labeled input"
                                    onChange={(e) => onChange(e)}
                                    value={editableItem.time}
                                />
                                <div className="borderRight"> </div>
                            </div>

                        </div>
                        <div className="field">
                            <div className="ui right labeled input">
                                <label htmlFor="amount" className="ui label labelCalendarStyle">
                                    <i className="calendar alternate outline icon timeIcon" />
                                </label>
                                <input
                                    required
                                    type="text"
                                    placeholder="Date..."
                                    name="date"
                                    className="ui right labeled input"
                                    onChange={(e) => onChange(e)}
                                    value={editableItem.date}
                                />
                                <div className="borderRight"> </div>
                            </div>
                        </div>
                        {editableItem.image && (
                            <>
                                <img
                                    src={editableItem.image}
                                    alt={editableItem.title}
                                    className="imageContainer"
                                />
                            </>
                        )}
                        <div className="field">
                            <input
                                type="text"
                                name="image"
                                onChange={(e) => onChange(e)}
                                value={editableItem.image}
                            />
                        </div>

                        <button
                            className="ui positive buttonSave button"
                            onClick={(event) => saveMenuItemEdit(editableItem)}
                        >
                            Save Changes
                                </button>
                        <button
                            className="ui teal button buttonAdd"
                            onClick={(event) => addItemMenu(editableItem)}
                        >
                            Add Item
                            </button>
                    </div>
                </div>
            </div>
        </div>

        </>
    );
};

const mapStateToProps = (state) => ({
    eventsItem: state.eventsReducer.eventsItem,
});

export default connect(mapStateToProps)(EventsPanel);
