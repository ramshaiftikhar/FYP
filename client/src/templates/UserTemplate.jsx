import React from "react";
import { Switch, useRouteMatch, Redirect } from "react-router-dom";
import CreateFundRaiser from "../pages/user/CreateFundRaiser";
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
          <CreateFundRaiser />
        </UserRoute>
        <UserRoute path={`${match.path}view`}>
          <ViewFundRaiser />
        </UserRoute>
        <Redirect to="/user/view" />
      </Switch>
    </UserWrapper>
  );
};
const UserWrapper = styled.div`
  padding-top: 80px;
`;
export default UserTemplate;
