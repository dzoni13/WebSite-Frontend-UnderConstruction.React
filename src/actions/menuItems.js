import axios from "axios";
import {
    ADDED_MENU_ITEM_FAIL,
    ADDED_MENU_ITEM,
    MENU_ITEMS_LOADED,
    MENU_ITEMS_LOADING_FAIL,
} from "./types";

const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjA1MDhmY2JmNGQ1NmY0OWJjMzJmMDAxIn0sImlhdCI6MTYxODE2NTQ1NiwiZXhwIjoxNjE4NTI1NDU2fQ.52FycHrwhriJcPnuw1GFJjiTJ3mux1SISQa8mxpifaE";



export const loadMenuItems = (tag) => {
    return async (dispatch) => {
        console.log("Load Items Function Started");
        try {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    "x-auth-token": `${token}`,
                },
            };

            const res = await axios.get(`/api/menuitems/${tag}`, config);
            if (res.status === 200) {
                console.log("Get Request Finished Succesfully");
                dispatch({
                    type: MENU_ITEMS_LOADED,
                    payload: res.data,
                });
            }
        } catch (err) {
            const errors = err.response.data.errors;
            if (errors) {
                console.log(errors);
            }
            dispatch({
                type: MENU_ITEMS_LOADING_FAIL,
            });
        }
    };
};


export const addMenuItem = (item) => {
    console.log("hello from add Menu:", item);

    return async (dispatch) => {
        try {
            const token =
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjA1MDhmY2JmNGQ1NmY0OWJjMzJmMDAxIn0sImlhdCI6MTYxODE2NTQ1NiwiZXhwIjoxNjE4NTI1NDU2fQ.52FycHrwhriJcPnuw1GFJjiTJ3mux1SISQa8mxpifaE";
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    "x-auth-token": `${token}`,
                },
            };

            const res = await axios.post("/api/menuitems", item, config);

            if (res.status === 200) {
                console.log("xxx");
                dispatch({
                    type: ADDED_MENU_ITEM,
                    payload: res.data,
                });
            }
            if (res.status === 404) {
            }
        } catch (err) {
            const errors = err.response.data.errors;
            if (errors) {
                console.log(errors);
                dispatch({
                    type: ADDED_MENU_ITEM_FAIL,
                });
            }
        }
    };
};

export const deleteMenuItem = (item) => {
    console.log("THIS IS DELETET MENU ITEM:", item);
    const config = {
        headers: {
            "Content-Type": "application/json",
            "x-auth-token": `${token}`,
        },
    };

    return axios.delete(`/api/menuitems/${item._id}`, config);


};

export const editMenuItem = (item) => {
    console.log("Edit Menu:", item);
    const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjA1MDhmY2JmNGQ1NmY0OWJjMzJmMDAxIn0sImlhdCI6MTYxODE2NTQ1NiwiZXhwIjoxNjE4NTI1NDU2fQ.52FycHrwhriJcPnuw1GFJjiTJ3mux1SISQa8mxpifaE";
    const config = {
        headers: {
            "Content-Type": "application/json",
            "x-auth-token": `${token}`,
        },
    };
    return axios.patch(`/api/menuItems/${item._id}`, item, config);
};
