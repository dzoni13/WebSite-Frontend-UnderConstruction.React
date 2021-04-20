import React, { useEffect, useState } from "react";
import { NotificationManager } from "react-notifications";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import MenuItem from "./MenuItem";
import Footer from "../../Footer/index";
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
  tag: "",
};

const MenuPanel = ({ menuItems }) => {
  const dispatch = useDispatch();

  const stableDispatch = useDispatch();

  const [adminDisplayClass, setAdminDisplayClass] = useState("adminPanel");

  const [editableItem, setEditableItem] = useState(initialState);

  useEffect(() => {
    stableDispatch(loadMenuItems("drinks"));
  }, [stableDispatch]);

  function getMenuItemByTag(tag) {
    setEditableItem({
      ...editableItem,
      tag: tag,
    });

    dispatch(loadMenuItems(tag));
  }

  function renderItems() {
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

  function onChange(event) {
    setEditableItem({
      ...editableItem,
      [event.target.name]: event.target.value,
    });
  }

  function addItemMenu(item) {
    if (item.title === "" || item.tag === "") {
      NotificationManager.error("Please enter title and tag.");
    } else {
      dispatch(addMenuItem(editableItem)).then(() => {
        dispatch(loadMenuItems(item.tag));
        setEditableItem(initialState);
      });
    }
  }

  function saveMenuItemEdit(item) {
    if (item._id === null) {
      NotificationManager.error("Please Select Item To Edit.");
    } else {
      editMenuItem(item).then(() => {
        NotificationManager.success("Item Edited Succesfuly");
        dispatch(loadMenuItems(item.tag));
        setEditableItem(initialState);
      });
    }
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
      tag: item.tag,
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

  return (
    <>
      <div className="adminPanelContainer">
        <div>
          <div className="dropdown">
            <button className="dropbtn">
              Select Menu
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
              <p onClick={(event) => getMenuItemByTag("drinks")}>Drinks</p>
              <p onClick={(event) => getMenuItemByTag("appetizers")}>
                Appetizers
              </p>
              <p onClick={(event) => getMenuItemByTag("ala_carte")}>
                A la carte
              </p>
            </div>
          </div>
          <button
            className="ui teal button buttonAddMobil"
            onClick={(event) => openForm()}
          >
            {" "}
            Add{" "}
          </button>
        </div>
        <DropDown />
        <div className="adminMenuItemsPanelWraper">
          <div className="ui grid cardStyleMenuItemsContainer">
            {renderItems()}
          </div>
          <div className={adminDisplayClass}>
            <div className="buttonCloseFormContainer">
              <button
                className=" buttonCloseForm"
                onClick={(event) => closeForm()}
              >
                <i className="close icon"></i>
              </button>
            </div>
            <div className="ui form formWrapper">
              <div className="titleTag">
                <div className="field">
                  <input
                    type="text"
                    name="title"
                    placeholder="Title..."
                    onChange={(e) => onChange(e)}
                    value={editableItem.title}
                  />
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
              <div className="field">
                <div className="ui right labeled input">
                  <label htmlFor="amount" className="ui label labelStyle">
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
      <Footer />
    </>
  );
};
const mapStateToProps = (state) => ({
  menuItems: state.menuItemReducer.menuItems,
});

export default connect(mapStateToProps)(MenuPanel);
