import axios from "axios";
import { NotificationManager } from 'react-notifications';

import {
    TEAM_LOADED,
    TEAM_LOADING_FAIL,
    ADDED_TEAM_MEMBER,
    ADDED_TEAM_MEMBER_FAIL,
} from "./types";

const token = localStorage.getItem("token");

export const loadTeamMembers = () => {
    return async (dispatch) => {
        try {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    "x-auth-token": `${token}`,
                },
            };
            const res = await axios.get(
                "https://restaurant-aplication-backend.herokuapp.com/api/team",
                config
            );
            if (res.status === 200) {
                dispatch({
                    type: TEAM_LOADED,
                    payload: res.data,
                });
            }
        } catch (err) {
            const errors = err.response.data.errors;
            if (errors) {
                console.log(errors);
            }
            dispatch({
                type: TEAM_LOADING_FAIL,
            });
        }
    };
};

export const addTeamMember = (item) => {
    return async (dispatch) => {
        try {
            const token = localStorage.getItem("token");
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    "x-auth-token": `${token}`,
                },
            };

            const res = await axios.post(
                "https://restaurant-aplication-backend.herokuapp.com/api/team",
                item,
                config
            );

            if (res.status === 200) {
                NotificationManager.success('Item Added Succesfuly')
                dispatch({
                    type: ADDED_TEAM_MEMBER,
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
                    type: ADDED_TEAM_MEMBER_FAIL,
                });
            }
        }
    };
};


export const editTeamMember = (item) => {
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
    return axios.patch(`https://restaurant-aplication-backend.herokuapp.com/api/team/${item._id}`, item, config);
};

export const deleteTeamMember = (item) => {
    NotificationManager.info('Item Deleted Succesfuly')
    const config = {
        headers: {
            "Content-Type": "application/json",
            "x-auth-token": `${token}`,
        },
    };

    return axios.delete(
        `https://restaurant-aplication-backend.herokuapp.com/api/team/${item._id}`,
        config
    );
};
