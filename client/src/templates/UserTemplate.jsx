import React from "react";
import { Switch, useRouteMatch, Redirect } from "react-router-dom";
<<<<<<< HEAD
import CreateFundRaiser from "../pages/user/CreateFundRaiser";
=======
import CreateFundraiser from "../pages/user/CreateFundraiser";

import AllSearches from "../pages/AllSearches";
>>>>>>> 46d009dc8abfbee4a9cdfdb3525b6ac6d147eafd
import ViewFundRaiser from "../pages/user/ViewFundRaisers";
import { UserRoute } from "../shared/authentication";
import { UserHeader } from "../components/headers";
import styled from "styled-components";
const UserTemplate = (props) => {
  const match = useRouteMatch();
  console.log(match.path);
  return (
    <UserWrapper>
      <UserHeader></UserHeader>
      <Switch>
        <UserRoute path={`${match.path}create`}>
<<<<<<< HEAD
          <CreateFundRaiser />
=======
          <CreateFundraiser />
>>>>>>> 46d009dc8abfbee4a9cdfdb3525b6ac6d147eafd
        </UserRoute>
        <UserRoute path={`${match.path}view`}>
          <ViewFundRaiser />
        </UserRoute>
<<<<<<< HEAD
=======
        <UserRoute path={`${match.path}all`}>
        <AllSearches />
      </UserRoute>
>>>>>>> 46d009dc8abfbee4a9cdfdb3525b6ac6d147eafd
        <Redirect to="/user/view" />
      </Switch>
    </UserWrapper>
  );
};
const UserWrapper = styled.div`
  padding-top: 80px;
`;
export default UserTemplate;
