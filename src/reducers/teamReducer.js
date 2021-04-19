import {
    TEAM_LOADED,
    TEAM_LOADING_FAIL,
    ADDED_TEAM_MEMBER,
    ADDED_TEAM_MEMBER_FAIL,
} from "../actions/types";

const initialState = {
    isFailed: false,
    member: null,
    teamMembers: [],
};

export default function foo(state = initialState, action) {

    const { type, payload } = action;

    switch (type) {
        case TEAM_LOADED:
            return {
                ...state,
                isFailed: false,
                teamMembers: payload,
            };
        case TEAM_LOADING_FAIL:
            return {
                ...state,
                isFailed: true,
            };
        case ADDED_TEAM_MEMBER:
            return {
                ...state,
                isFailed: false,
                member: payload,
            };
        case ADDED_TEAM_MEMBER_FAIL:
            return {
                ...state,
                isFailed: true,
            };
        default:
            return state;
    }
}  