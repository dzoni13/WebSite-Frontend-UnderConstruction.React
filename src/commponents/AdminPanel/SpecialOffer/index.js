import React, { useEffect, useState } from "react";
import { NotificationManager } from 'react-notifications';
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import OfferItem from "./OfferItem";
import DropDown from "../DropDown/index";
import "../../../index.css";
import "./index.css";
import {
    addMenuItem,
    loadMenuItems,
    editMenuItem,
    deleteMenuItem,
} from "../../../actions/menuItems";

const initialState = {
    _id: null,
    title: "",
    description: "",
    short_description: "",
    image: "",
    tag: "offer"
}

const SpecialOffer = ({ menuItems }) => {
    const dispatch = useDispatch();

    const [adminDisplayClass, setAdminDisplayClass] = useState("adminPanel");

    const [editableItem, setEditableItem] = useState(initialState);

    const stableDispatch = useDispatch()


    useEffect(() => {
        stableDispatch(loadMenuItems("offer"));
    }, [stableDispatch]);




    function renderItemsByTag(tag) {
        const list = menuItems.filter(item => item.tag === tag)
        return list.map((item, i) => {

            return <OfferItem
                key={i}
                item={item}
                editItem={editItem}
                deleteItem={deleteItem} />;
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
            dispatch(addMenuItem(editableItem)).then(() => {
                dispatch(loadMenuItems(item.tag));
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
                dispatch(loadMenuItems(item.tag))
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
            short_description: item.short_description,
            description: item.description,
            image: item.image,
        });
    }

    function deleteItem(item) {


        window.confirm('Are you sure you wish to delete this item?')

        deleteMenuItem(item).then(() => {
            dispatch(loadMenuItems(item.tag));
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
        <>
            <div className="adminPanelContainer">
                <div>
                    <DropDown />
                    <button className="ui teal button buttonAddMobil" onClick={(event) => openForm()}> Add </button>
                </div>



                <div className="adminMenuItemsPanelWraper">
                    <div className="ui grid cardStyleMenuItemsContainer">
                        {renderItemsByTag("offer")}
                    </div>

                    <div className={adminDisplayClass}>
                        <div className="buttonCloseFormContainer">
                            <button className=" buttonCloseForm" onClick={(event) => closeForm()}><i className="close icon"></i></button>
                        </div>

                        <div className="ui form formWrapper">
                            <div className="titleTag">
                                <div className="field">
                                    <input
                                        type="text"
                                        name="title"
                                        placeholder="Title..."
                                        onChange={(e) => onChange(e)}
                                        value={editableItem.title} />
                                </div>
                                <p>.</p>
                                <div className="field">
                                    <input
                                        type="text"
                                        name="tag"
                                        placeholder="Tag..."
                                        onChange={(e) => onChange(e)}
                                        value={editableItem.tag}
                                    />
                                </div>
                            </div>




                            <div className="field">
                                <input
                                    type="text"
                                    name="short_description"
                                    placeholder="Short Description..."
                                    onChange={(e) => onChange(e)}
                                    value={editableItem.short_description}
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
    menuItems: state.menuItemReducer.menuItems,
});

export default connect(mapStateToProps)(SpecialOffer);

