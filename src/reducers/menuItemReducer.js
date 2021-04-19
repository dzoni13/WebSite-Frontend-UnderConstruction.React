import {
    ADDED_MENU_ITEM,
    ADDED_MENU_ITEM_FAIL,
    MENU_ITEMS_LOADED, MENU_ITEMS_LOADING_FAIL,
} from "../actions/types.js";

const initialState = {
    isFailed: false,
    menuItem: null,
    menuItems: [],
};

export default function foo(state = initialState, action) {

    const { type, payload } = action;

    switch (type) {
        case MENU_ITEMS_LOADED:
            return {
                ...state,
                isFailed: false,
                menuItems: payload,
            };
        case MENU_ITEMS_LOADING_FAIL:
            return {
                ...state,
                isFailed: true,
            };
        case ADDED_MENU_ITEM:
            return {
                ...state,
                isFailed: false,
                menuItem: payload,
            };
        case ADDED_MENU_ITEM_FAIL:
            return {
                ...state,
                isFailed: true,
            };
        default:
            return state;
    }
}