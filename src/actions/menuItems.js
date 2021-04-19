import axios from "axios";
import { NotificationManager } from 'react-notifications';
import {
    ADDED_MENU_ITEM_FAIL,
    ADDED_MENU_ITEM,
    MENU_ITEMS_LOADED,
    MENU_ITEMS_LOADING_FAIL,
} from "./types";

const token = localStorage.getItem("token");


export const loadAllMenuItems = () => {
    return async (dispatch) => {
        try {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    "x-auth-token": `${token}`,
                },
            };
            const res = await axios.get(`https://restaurant-aplication-backend.herokuapp.com/api/menuitems/`, config);
            if (res.status === 200) {
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

export const loadMenuItems = (tag) => {

    return async (dispatch) => {
        try {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    "x-auth-token": `${token}`,
                },
            };

            const res = await axios.get(`https://restaurant-aplication-backend.herokuapp.com/api/menuitems/${tag}`, config);
            if (res.status === 200) {
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
    return async (dispatch) => {
        try {
            const token = localStorage.getItem("token");
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    "x-auth-token": `${token}`,
                },
            };
            const res = await axios.post("https://restaurant-aplication-backend.herokuapp.com/api/menuitems", item, config);

            if (res.status === 200) {
                NotificationManager.success('Item Added Succesfuly')
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

export const editMenuItem = (item) => {
    if (item._id === undefined) {
        NotificationManager.error('Please Select Item To Edit.')
    }
    const token = localStorage.getItem("token");
    const config = {
        headers: {
            "Content-Type": "application/json",
            "x-auth-token": `${token}`,
        },
    };
    return axios.patch(`https://restaurant-aplication-backend.herokuapp.com/api/menuitems/${item._id}`, item, config);
};

export const deleteMenuItem = (item) => {
    NotificationManager.info('Item Deleted Succesfuly')
    const token = localStorage.getItem("token");

    const config = {
        headers: {
            "Content-Type": "application/json",
            "x-auth-token": `${token}`,
        },
    };
    return axios.delete(`https://restaurant-aplication-backend.herokuapp.com/api/menuitems/${item._id}`, config);

};