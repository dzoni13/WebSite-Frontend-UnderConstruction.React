import { combineReducers } from "redux";
import auth from "./auth";
import menuItemReducer from "./menuItemReducer";
import eventsReducer from "./eventsReducer";

export default combineReducers({
    auth,
    menuItemReducer,
    eventsReducer
});
