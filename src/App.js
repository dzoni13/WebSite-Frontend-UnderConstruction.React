import { BrowserRouter } from "react-router-dom";
import Header from "./commponents/Header";
import Routes from "./Routes";
import React, { Fragment, useEffect } from "react";
import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

//import Login from "./commponents/Login/index";

import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";

if (localStorage.token) {
    setAuthToken(localStorage.token);
}
const App = () => {
    useEffect(() => {
        store.dispatch(loadUser());
    }, []);

    return (
        <>
            <NotificationContainer />
            <Provider store={store}>
                <BrowserRouter>
                    <Fragment>
                        <Header />
                        <Routes />
                        {/*<Login />*/}
                    </Fragment>
                </BrowserRouter>
            </Provider>
        </>
    );
};

export default App;
