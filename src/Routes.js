import { Switch, Route } from "react-router-dom";
import AboutPage from "./commponents/AboutPage";
import LandingPage from "./commponents/LandingPage";
import Login from "./commponents/Login/index";
import AdminPanel from "./commponents/AdminPanel";
import MenuPanel from "./commponents/AdminPanel/Menu/index.js";
import EventsPanel from "./commponents/AdminPanel/Events";
import TeamPanel from "./commponents/AdminPanel/Team";
import MenuPage from "./commponents/MenuPage";

export default function Routes() {
    return (
        <Switch>
            <Route path="/about">
                <AboutPage />
            </Route>
            <Route path="/admin">
                <AdminPanel />
            </Route>
            <Route path="/landing">
                <LandingPage />
            </Route>
            <Route path="/menu">
                <MenuPage />
            </Route>
            <Route path="/menuPanel" component={MenuPanel} />
            <Route path="/events" component={EventsPanel} />
            <Route path="/team" component={TeamPanel} />
            <Route path="/login" component={Login} />
            <Route path="/">
                <LandingPage />
            </Route>
        </Switch>
    );
}
