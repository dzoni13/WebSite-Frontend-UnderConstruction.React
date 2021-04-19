import {
    RESERVATION_LOADED,
    RESERVATION_LOADING_FAIL,
    ADDED_RESERVATION,
    ADDED_RESERVATION_FAIL,
} from "../actions/types";

const initialState = {
    isFailed: false,
    reservationi: null,
    reservationItem: [],
};

export default function foo(state = initialState, action) {

    const { type, payload } = action;

    switch (type) {
        case RESERVATION_LOADED:
            return {
                ...state,
                isFailed: false,
                reservationItem: payload,
            };
        case RESERVATION_LOADING_FAIL:
            return {
                ...state,
                isFailed: true,
            };
        case ADDED_RESERVATION:
            return {
                ...state,
                isFailed: false,
                reservationi: payload,
            };
        case ADDED_RESERVATION_FAIL:
            return {
                ...state,
                isFailed: true,
            };

        default:
            return state;
    }
}
