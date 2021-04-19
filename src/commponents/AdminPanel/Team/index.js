import React, { useEffect, useState } from "react";
import { NotificationManager } from 'react-notifications';
import TeamItem from "./TeamItem";
import DropDown from "../DropDown/index";
import "./index.css";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import {
    loadTeamMembers,
    addTeamMember,
    editTeamMember,
    deleteTeamMember,
} from "../../../actions/team";


const initialState = {
    _id: null,
    name: "",
    short_description: "",
    description: "",
    image: ""
}

const TeamPanel = ({ teamMembers }) => {

    const dispatch = useDispatch();

    const [adminDisplayClass, setAdminDisplayClass] = useState("adminPanel");

    const [editableItem, setEditableItem] = useState(initialState);

    const stableDispatch = useDispatch()


    useEffect(() => {
        stableDispatch(loadTeamMembers());
    }, [stableDispatch]);




    function renderItems() {
        return teamMembers.map((item, i) => {
            return <TeamItem key={i} item={item} editMember={editMember} deleteMember={deleteMember} />;
        });
    }

    function onChange(event) {
        setEditableItem({
            ...editableItem,
            [event.target.name]: event.target.value,
        });
    }

    function addMember(item) {
        if (item.name === "") {
            NotificationManager.error('Please enter name.')
        } else {
            dispatch(addTeamMember(editableItem)).then(() => {
                dispatch(loadTeamMembers());
                setEditableItem(initialState);
            });
        }
    }


    function saveMember(item) {
        if (item._id === null) {
            NotificationManager.error('Please Select Item To Edit.')
        } else {
            editTeamMember(item).then(() => {
                NotificationManager.success('Item Edited Succesfuly')
                dispatch(loadTeamMembers())
                setEditableItem(initialState)
            });
        }
    }



    function editMember(item) {
        if (window.innerWidth < 600) {
            setAdminDisplayClass("adminPanelDisplay");
        }

        setEditableItem({
            ...editableItem,
            _id: item._id,
            name: item.name,
            short_description: item.short_description,
            description: item.description,
            image: item.image,
        });
    }


    function deleteMember(item) {
        deleteTeamMember(item).then(() => {
            dispatch(loadTeamMembers());
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
                                    name="name"
                                    placeholder="Name..."
                                    onChange={(e) => onChange(e)}
                                    value={editableItem.name}
                                />
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
                                    type="text"
                                    placeholder="Description..."
                                    name="description"
                                    onChange={(e) => onChange(e)}
                                    value={editableItem.description}

                                >
                                    {" "}

                                </textarea>
                            </div>

                            {editableItem.image && (
                                <>
                                    <img
                                        src={editableItem.image}
                                        alt={editableItem.name}
                                        className="imageContainer"
                                    />
                                </>
                            )}
                            <div className="field">
                                <input
                                    type="text"
                                    name="image"
                                    placeholder="Image..."
                                    onChange={(e) => onChange(e)}
                                    value={editableItem.image}
                                />
                            </div>

                            <button
                                className="ui positive buttonSave button"
                                onClick={(event) => saveMember(editableItem)}
                            >
                                Save Changes
                                </button>
                            <button
                                className="ui teal button buttonAdd"
                                onClick={(event) => addMember(editableItem)}
                            >
                                Add Item
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

const mapStateToProps = (state) => ({
    teamMembers: state.teamReducer.teamMembers,
});

export default connect(mapStateToProps)(TeamPanel);



