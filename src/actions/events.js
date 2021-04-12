import axios from "axios";
import {
    EVENT_ITEMS_LOADED,
    EVENT_ITEMS_LOADING_FAIL,
    ADDED_EVENT_ITEM,
    ADDED_EVENT_ITEM_FAIL,
} from "./types";

const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjA1MDhmY2JmNGQ1NmY0OWJjMzJmMDAxIn0sImlhdCI6MTYxODE2NTQ1NiwiZXhwIjoxNjE4NTI1NDU2fQ.52FycHrwhriJcPnuw1GFJjiTJ3mux1SISQa8mxpifaE";



export const loadEventItems = () => {
    return async (dispatch) => {
        try {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    "x-auth-token": `${token}`,
                },
            };
            const res = await axios.get("/api/event", config);
            if (res.status === 200) {
                console.log("Get Request Finished Succesfully");
                dispatch({
                    type: EVENT_ITEMS_LOADED,
                    payload: res.data,
                });
            }
        } catch (err) {
            const errors = err.response.data.errors;
            if (errors) {
                console.log(errors);
            }
            dispatch({
                type: EVENT_ITEMS_LOADING_FAIL,
            });
        }
    };
};


export const addEditItem = (item) => {
    console.log("hello from add Edit Event Item:", item);

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

            const res = await axios.post("/api/event", item, config);

            if (res.status === 200) {
                console.log("xxx");
                dispatch({
                    type: ADDED_EVENT_ITEM,
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
                    type: ADDED_EVENT_ITEM_FAIL,
                });
            }
        }
    };
};



export const editMenuItem = (item) => {
    console.log("Edit Event item:", item);
    const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjA1MDhmY2JmNGQ1NmY0OWJjMzJmMDAxIn0sImlhdCI6MTYxODE2NTQ1NiwiZXhwIjoxNjE4NTI1NDU2fQ.52FycHrwhriJcPnuw1GFJjiTJ3mux1SISQa8mxpifaE";
    const config = {
        headers: {
            "Content-Type": "application/json",
            "x-auth-token": `${token}`,
        },
    };
    return axios.patch(`/api/event/${item._id}`, item, config);
};






export const deleteMenuItem = (item) => {
    console.log("THIS IS DELETET MENU ITEM:", item);
    const config = {
        headers: {
            "Content-Type": "application/json",
            "x-auth-token": `${token}`,
        },
    };

    return axios.delete(`/api/event/${item._id}`, config);


};










/*
export const addMenuItem = (item) => {
    console.log("hello from add Menu:", item);

    return async (dispatch) => {
        try {
            const token =
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjA1MDhmY2JmNGQ1NmY0OWJjMzJmMDAxIn0sImlhdCI6MTYxNzY5NDMxMiwiZXhwIjoxNjE4MDU0MzEyfQ.06-TG5Lm9rXK2MQsj_sc8N4gU2PxrPRMHPhlANCegok";
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
};*/


/*
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
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjA1MDhmY2JmNGQ1NmY0OWJjMzJmMDAxIn0sImlhdCI6MTYxNzY5NDMxMiwiZXhwIjoxNjE4MDU0MzEyfQ.06-TG5Lm9rXK2MQsj_sc8N4gU2PxrPRMHPhlANCegok";
    const config = {
        headers: {
            "Content-Type": "application/json",
            "x-auth-token": `${token}`,
        },
    };
    return axios.patch(`/api/menuItems/${item._id}`, item, config);
};
*/