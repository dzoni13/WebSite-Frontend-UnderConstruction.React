import axios from "axios";
import { NotificationManager } from 'react-notifications';

import {
    EVENT_ITEMS_LOADED,
    EVENT_ITEMS_LOADING_FAIL,
    ADDED_EVENT_ITEM,
    ADDED_EVENT_ITEM_FAIL,
} from "./types";

const token = localStorage.getItem("token");

export const loadEventItems = () => {
    return async (dispatch) => {
        try {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    "x-auth-token": `${token}`,
                },
            };
            const res = await axios.get(
                "https://restaurant-aplication-backend.herokuapp.com/api/event",
                config
            );
            if (res.status === 200) {
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

    return async (dispatch) => {
        try {
            const token = localStorage.getItem("token");
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    "x-auth-token": `${token}`,
                },
            };

            const res = await axios.post("https://restaurant-aplication-backend.herokuapp.com/api/event", item, config);
            if (res.status === 200) {
                NotificationManager.success('Item Added Succesfuly')
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
    if (item._id === undefined) {
        NotificationManager.error('Please Select Item To Edit.')

    } else {

        const token = localStorage.getItem("token");
        const config = {
            headers: {
                "Content-Type": "application/json",
                "x-auth-token": `${token}`,
            },
        };
        return axios.patch(`https://restaurant-aplication-backend.herokuapp.com/api/event/${item._id}`, item, config);
    }
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

    return axios.delete(`https://restaurant-aplication-backend.herokuapp.com/api/event/${item._id}`, config);


};










