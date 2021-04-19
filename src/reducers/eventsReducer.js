import {
    EVENT_ITEMS_LOADED,
    EVENT_ITEMS_LOADING_FAIL,
    ADDED_EVENT_ITEM,
    ADDED_EVENT_ITEM_FAIL
} from "../actions/types";


const initialState = {
    isFailed: false,
    eventi: null,
    eventsItem: [],
};

export default function foo(state = initialState, action) {

    const { type, payload } = action;

    switch (type) {
        case EVENT_ITEMS_LOADED:
            return {
                ...state,
                isFailed: false,
                eventsItem: payload,
            };
        case EVENT_ITEMS_LOADING_FAIL:
            return {
                ...state,
                isFailed: true,
            };
        case ADDED_EVENT_ITEM:
            return {
                ...state,
                isFailed: false,
                eventi: payload,
            };
        case ADDED_EVENT_ITEM_FAIL:
            return {
                ...state,
                isFailed: true,
            };


        default:
            return state;

    }
}  