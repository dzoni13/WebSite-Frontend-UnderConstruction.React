import { Switch, Route } from "react-router-dom";
import AboutPage from "./commponents/AboutPage";
import LandingPage from "./commponents/LandingPage";
import Login from "./commponents/Login/index";
import AdminPanel from "./commponents/AdminPanel";
import MenuPanel from "./commponents/AdminPanel/Menu/index.js";
import EventsPanel from "./commponents/AdminPanel/Events";
import TeamPanel from "./commponents/AdminPanel/Team";
import MenuPage from "./commponents/MenuPage";
import ReservationTable from "./commponents/AdminPanel/Reservation/index";
import SpecialOffer from "./commponents/AdminPanel/SpecialOffer/index";
import PrivateRoute from "./commponents/routing/PrivateRoute";

export default function Routes() {
  return (
    <Switch>
      <Route path="/about">
        <AboutPage />
      </Route>
      <PrivateRoute path="/admin">
        <AdminPanel />
      </PrivateRoute>
      <Route path="/landing">
        <LandingPage />
      </Route>
      <Route path="/menu">
        <MenuPage />
      </Route>
      <PrivateRoute path="/specialOffer" component={SpecialOffer} />
      <PrivateRoute path="/reservations" component={ReservationTable} />
      <PrivateRoute path="/menuPanel" component={MenuPanel} />
      <PrivateRoute path="/events" component={EventsPanel} />
      <PrivateRoute path="/team" component={TeamPanel} />
      <Route path="/login" component={Login} />
      <Route path="/">
        <LandingPage />
      </Route>
    </Switch>
  );
}
