import { combineReducers } from "redux";
import auth from "./auth";
import menuItemReducer from "./menuItemReducer";
import eventsReducer from "./eventsReducer";
import reservation from "./reservation";
import teamReducer from "./teamReducer";

export default combineReducers({
    auth,
    menuItemReducer,
    eventsReducer,
    reservation,
    teamReducer,
});
