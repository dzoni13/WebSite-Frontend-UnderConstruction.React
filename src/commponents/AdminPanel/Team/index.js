import React, { useState } from "react";
import data from "./data.json";
import TeamItem from "./TeamItem";
import DropDown from "../DropDown/index";
import Footer from "../../Footer/index";
import "./index.css";
import axios from "axios";

function TeamPanel() {
    console.log(data);

    const [editableItem, setEditableItem] = useState({
        name: "",
        shortDescription: "",
    });

    function onChange(event) {
        console.log(event.target);
        setEditableItem({
            ...editableItem,
            [event.target.name]: event.target.value,
        });
        console.log(event.target.value);
    }
    const [formData, setFormData] = useState({
        name: "",
        shortDescription: "",
        image: "",
    });
    const { name, shortDescription, image } = setFormData;

    const saveTeam = async (e) => {
        const newMember = {
            name,
            shortDescription,
            image,
        };

        try {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    "x-auth-token":
                        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjA1MDhmY2JmNGQ1NmY0OWJjMzJmMDAxIn0sImlhdCI6MTYxNzI2NTYyMywiZXhwIjoxNjE3NjI1NjIzfQ.eHUN8NS6W2A2yugOacxezpGZw_eEmG6P7BVH-rr22iA",
                },
            };
            const body = JSON.stringify(newMember);
            const res = await axios.post("/api/team", body, config);
            console.log(res.data);
        } catch (err) {
            console.log(err.response.data);
        }
    };

    function renderItems() {
        return data.data.map((item, i) => {
            return <TeamItem key={i} item={item} editItem={editItem} />;
        });
    }

    function editItem(item) {
        setEditableItem({
            ...editableItem,
            name: item.name,
            shortDescription: item.shortDescription,
            image: item.image,
        });
    }

    return (
        <>
            <DropDown />
            <div className="adminPanelContainer">
                <h3 className="menuH3">TEAM</h3>
                <div className="adminMenuPanelWraper">
                    <div className="ui stackable four column grid cardStyleContainer">
                        {renderItems()}
                    </div>
                    <div className="adminPanel">
                        <form class="ui form">
                            <div class="field">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name..."
                                    onChange={(e) => onChange(e)}
                                    value={editableItem.name}
                                />
                            </div>
                            <div class="field">
                                <input
                                    type="text"
                                    name="shortDescription"
                                    placeholder="Short Description..."
                                    onChange={(e) => onChange(e)}
                                    value={editableItem.shortDescription}
                                />
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
                                    //onChange={(e) => onChange(e)}
                                    value={editableItem.image}
                                />
                            </div>
                            <input
                                class="ui positive button"
                                type="submit"
                                onSubmit={(e) => saveTeam(e)}
                            ></input>
                        </form>
                    </div>
                </div>
            </div>

        </>
    );
}

export default TeamPanel;
