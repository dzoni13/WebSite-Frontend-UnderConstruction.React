
import axios from "axios";
import { NotificationManager } from 'react-notifications';
import {
    RESERVATION_LOADED,
    RESERVATION_LOADING_FAIL,
    ADDED_RESERVATION,
    ADDED_RESERVATION_FAIL,
} from "./types";

const token = localStorage.getItem("token");

export const loadReservationItems = () => {
    return async (dispatch) => {
        try {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    "x-auth-token": `${token}`,
                },
            };
            const res = await axios.get(
                "https://restaurant-aplication-backend.herokuapp.com/api/reservation",
                config
            );
            if (res.status === 200) {
                dispatch({
                    type: RESERVATION_LOADED,
                    payload: res.data,
                });
            }
        } catch (err) {
            const errors = err.response.data.errors;
            if (errors) {
                console.log(errors);
            }
            dispatch({
                type: RESERVATION_LOADING_FAIL,
            });
        }
    };
};



export const addReservation = (item) => {
    return async (dispatch) => {
        try {
            const token = localStorage.getItem("token");
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    "x-auth-token": `${token}`,
                },
            };
            const body = JSON.stringify(item);
            const res = await axios.post("https://restaurant-aplication-backend.herokuapp.com/api/reservation", body, config);

            if (res.status === 200) {
                NotificationManager.success('Reservation Aded Succesfuly')
                dispatch({
                    type: ADDED_RESERVATION,
                    payload: res.data,
                });
            }
        } catch (err) {
            const errors = err.response.data.errors;
            if (errors) {
                console.log(errors);
                dispatch({
                    type: ADDED_RESERVATION_FAIL,
                });
            }
        }
    };
};

export const editResItem = (item) => {
    if (item?._id === undefined) {
        NotificationManager.error('Please Select Item To Edit.')
    }
    const token = localStorage.getItem("token");
    const config = {
        headers: {
            "Content-Type": "application/json",
            "x-auth-token": `${token}`,
        },
    };
    return axios.patch(`https://restaurant-aplication-backend.herokuapp.com/api/reservation/${item._id}`, item, config);
};

export const deleteReservation = (item) => {
    NotificationManager.info('Item Deleted Succesfuly')
    const config = {
        headers: {
            "Content-Type": "application/json",
            "x-auth-token": `${token}`,
        },
    };

    return axios.delete(`https://restaurant-aplication-backend.herokuapp.com/api/reservation/${item._id}`, config);
}






