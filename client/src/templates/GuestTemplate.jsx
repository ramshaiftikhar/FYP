import React from "react";
import { useRouteMatch, Switch, Route } from "react-router-dom";
import Landing from "../pages/Landing";
import Signup from "../pages/Signup";
import Search from "../pages/Search";
import AllSearches from "../pages/AllSearches";
import VerifiedSearch from "../pages/VerifiedSearch";
import FacebookSearch from "../pages/FacebookSearch";
import TwitterSearch from "../pages/TwitterSearch";
import RedditSearch from "../pages/RedditSearch";

import { GuestRoute } from "../shared/authentication";
const GuestTemplate = (props) => {
  const match = useRouteMatch();
  return (
    <Switch>
      <GuestRoute path={`${match.path}signup`}>
        <Signup />
      </GuestRoute>
      <Route path={`${match.path}search`}>
        <Search />
      </Route>
      <Route path={`${match.path}all`}>
        <AllSearches />
      </Route>

      <Route path={`${match.path}verified-search`}>
        <VerifiedSearch />
      </Route>
      <Route path={`${match.path}facebook-search`}>
        <FacebookSearch />
      </Route>

      <Route path={`${match.path}twitter-search`}>
        <TwitterSearch />
      </Route>

      <Route path={`${match.path}reddit-search`}>
        <RedditSearch />
      </Route>

      <GuestRoute path={`${match.path}`}>
        <Landing />
      </GuestRoute>
    </Switch>
  );
};

export default GuestTemplate;
