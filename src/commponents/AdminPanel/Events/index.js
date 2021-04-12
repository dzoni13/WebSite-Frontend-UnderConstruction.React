import React, { useEffect, useState } from "react";
import EventItem from "./EventItem";
import DropDown from "../DropDown/index";
import "./index.css";
import { useDispatch } from "react-redux";
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

    const [editableItem, setEditableItem] = useState(initialState);

    useEffect(() => {
        dispatch(loadEventItems());
    }, []);

    function renderItems() {
        return eventsItem.map((item, i) => {
            console.log("RENDER ITEMS, EVENT: ", item)
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
        console.log('treba dodati validaciju')
        dispatch(addEditItem(editableItem)).then(() => {
            dispatch(loadEventItems(item.title));
            setEditableItem(initialState);
        });
    }


    function saveMenuItemEdit(item) {
        console.log('treba dodati validaciju')
        editMenuItem(item).then(() => {
            dispatch(loadEventItems(item.title))
            setEditableItem(initialState)
        });

    }

    function editItem(item) {
        console.log("edit", item);

        setEditableItem({
            ...editableItem,
            _id: item._id,
            title: item.title,
            performers: item.performers,
            description: item.description,
            time: item.time,
            date: item.date,
            image: item.image,
        });
    }

    function deleteItem(item) {
        deleteMenuItem(item).then(() => {
            dispatch(loadEventItems(item.title));
        });
    }

    return (
        <>
            <DropDown />
            <div className="adminPanelContainer">
                <h3 className="eventsH3">EVENTS</h3>
                <div className="adminPanelWraper">
                    <div className="ui stackable four column grid eventsPanelContainer">
                        {renderItems()}
                    </div>
                    <div className="adminPanel">
                        <form class="ui form">
                            <div className="field">
                                <input
                                    type="text"
                                    name="title"
                                    placeholder="Title..."
                                    onChange={(e) => onChange(e)}
                                    value={editableItem.title} />
                            </div>
                            <div className="field">
                                <input
                                    type="text"
                                    name="shortDescription"
                                    placeholder="Performers..."
                                    onChange={(e) => onChange(e)}
                                    value={editableItem.shortDescription}
                                />
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
                                    <label for="amount" className="ui label labelStyle">
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
                                    <label for="amount" className="ui label labelCalendarStyle">
                                        <i className="calendar alternate outline icon timeIcon" />
                                    </label>
                                    <input
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
                                class="ui positive buttonSave button"
                                onClick={(event) => saveMenuItemEdit(editableItem)}
                            >
                                Save Changes
                                </button>
                            <button
                                class="ui teal button buttonAdd"
                                onClick={(event) => addItemMenu(editableItem)}
                            >
                                Add Item
                            </button>
                        </form>
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
