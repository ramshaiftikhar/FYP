import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GuestTemplate from "./templates/GuestTemplate";
import AuthContextProvider from "./context/AuthContext";
import { useEffect } from "react";
import UserTemplate from "./templates/UserTemplate";
import { UserRoute } from "./shared/authentication";
//import SideDrawer from "./components/SideDrawer";
//import Backdrop from './components/Backdrop/Backdrop'

const App = () => {
  return (
    <AuthContextProvider>
      <Router>
        <div className="App">
          {/*<SideDrawer/>   */}
          {/*<Backdrop/>*/}

          <Switch>
            <UserRoute path="/user/">
              <UserTemplate />
            </UserRoute>
            <Route path="/">
              <GuestTemplate />
            </Route>
          </Switch>
        </div>
      </Router>
    </AuthContextProvider>
  );
};

export default App;
