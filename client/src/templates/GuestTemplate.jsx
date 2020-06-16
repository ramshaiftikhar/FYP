import React from "react";
import { useRouteMatch, Switch, Route } from "react-router-dom";
import Landing from "../pages/Landing";
import Signup from "../pages/Signup";
import Search from "../pages/Search";
import AllSearches from "../pages/AllSearches";
import { GuestRoute } from "../shared/authentication";
const GuestTemplate = (props) => {
  const match = useRouteMatch();
  return (
    <Switch>
      <GuestRoute path={`${match.path}signup`}>
        <Signup />
      </GuestRoute>

      <Route path={`${match.path}all`}>
        <AllSearches />
      </Route>
      <Route path={`${match.path}search/:searchQuery`}>
        <Search />
      </Route>
      <GuestRoute path={`${match.path}`}>
        <Landing />
      </GuestRoute>
    </Switch>
  );
};

export default GuestTemplate;
