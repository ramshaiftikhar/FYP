import React from "react";
import { useRouteMatch, Switch, Route } from "react-router-dom";
import Landing from "../pages/Landing";
import Signup from "../pages/Signup";
import Search from "../pages/Search";
<<<<<<< HEAD
=======
import AllSearches from "../pages/AllSearches";
import VerifiedSearch from "../pages/VerifiedSearch";
import FacebookSearch from '../pages/FacebookSearch';
import TwitterSearch from '../pages/TwitterSearch';
import RedditSearch from '../pages/RedditSearch'

>>>>>>> 46d009dc8abfbee4a9cdfdb3525b6ac6d147eafd
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
<<<<<<< HEAD
=======
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
     
     
     
>>>>>>> 46d009dc8abfbee4a9cdfdb3525b6ac6d147eafd
      <GuestRoute path={`${match.path}`}>
        <Landing />
      </GuestRoute>
    </Switch>
  );
};

export default GuestTemplate;
