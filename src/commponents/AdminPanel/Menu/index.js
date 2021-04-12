import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import MenuItem from "./MenuItem";
import Footer from '../../Footer/index';
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
    short_description: "",
    description: "",
    price: "",
    tag: ""
}

const MenuPanel = ({ menuItems }) => {
    console.log("menuItems2222", menuItems);

    const dispatch = useDispatch();

    const [adminDisplayClass, setAdminDisplayClass] = useState("adminPanel");

    const [editButtonActive, setEditButtonActive] = useState({
        value: false,
    });

    const [editableItem, setEditableItem] = useState(initialState);


    useEffect(() => {
        dispatch(loadMenuItems("drinks"));
    }, []);


    function getMenuItemByTag(tag) {
        dispatch(loadMenuItems(tag));
    }

    function onChange(event) {
        setEditableItem({
            ...editableItem,
            [event.target.name]: event.target.value,
        });
    }

    function renderItems() {
        console.log("map:", menuItems);

        return menuItems.map((item, i) => {
            return (
                <MenuItem
                    key={i}
                    item={item}
                    editItem={editItem}
                    deleteItem={deleteItem}
                />
            );
        });
    }

    function saveMenuItemEdit(item) {
        console.log('treba dodati validaciju')
        editMenuItem(item).then(() => {
            dispatch(loadMenuItems(item.tag))
            setEditableItem(initialState)
        });

    }

    function addItemMenu(item) {
        console.log('treba dodati validaciju')
        dispatch(addMenuItem(editableItem)).then(() => {
            dispatch(loadMenuItems(item.tag));
            setEditableItem(initialState);
        });
    }


    function deleteItem(item) {
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


    function editItem(item) {
        if (window.innerWidth < 600) {
            setAdminDisplayClass("adminPanelDisplay");
        }

        setEditableItem({
            _id: item._id,
            title: item.title,
            short_description: item.short_description,
            description: item.description,
            image: item.image,
            price: item.price,
            tag: item.tag
        });
    }

    return (
        <>
            <div className="adminPanelContainer">
                <div>
                    <div className="dropdown">
                        <button className="dropbtn">Select Menu
                    <i className="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdown-content">
                            <a onClick={(event) => getMenuItemByTag("drinks")}>Drinks</a>
                            <a onClick={(event) => getMenuItemByTag("appetizers")}>Appetizers</a>
                            <a onClick={(event) => getMenuItemByTag("ala_carte")}>A la carte</a>
                        </div>
                    </div>
                    <button class="ui teal button buttonAddMobil" onClick={(event) => openForm()}> Add </button>
                </div>
                <DropDown />
                <div className="adminMenuItemsPanelWraper">
                    <div className="ui grid cardStyleMenuItemsContainer">
                        {renderItems()}
                    </div>
                    <div className={adminDisplayClass}>
                        <div className="buttonCloseFormContainer">
                            <button class=" buttonCloseForm" onClick={(event) => closeForm()}><i class="close icon"></i></button>
                        </div>
                        <div class="ui form formWrapper">
                            <div className="titleTag">
                                <div class="field">
                                    <input
                                        type="text"
                                        name="title"
                                        placeholder="Title..."
                                        onChange={(e) => onChange(e)}
                                        value={editableItem.title}
                                    />
                                </div>
                                <p>.</p>
                                <div class="field">
                                    <input
                                        type="text"
                                        name="tag"
                                        placeholder="Tag..."
                                        onChange={(e) => onChange(e)}
                                        value={editableItem.tag}
                                    />
                                </div>
                            </div>
                            <div class="field">
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
                            <div class="field">
                                <div className="ui right labeled input">
                                    <label for="amount" class="ui label labelStyle">
                                        $
                                       </label>
                                    <input
                                        type="text"
                                        placeholder="Price..."
                                        name="price"
                                        className="ui right labeled input"
                                        onChange={(e) => onChange(e)}
                                        value={editableItem.price}
                                    />
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
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};
const mapStateToProps = (state) => ({
    menuItems: state.menuItemReducer.menuItems,
});

export default connect(mapStateToProps)(MenuPanel);
