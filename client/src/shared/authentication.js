import { Route, Redirect } from "react-router-dom";
import React from "react";
import { useAuthState } from "../context/AuthContext";
export const UserRoute = ({ children, ...rest }) => {
  const state = useAuthState();
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return state.loggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/signup",
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export const GuestRoute = ({ children, ...rest }) => {
  let state = useAuthState();
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return state.loggedIn ? (
          <Redirect
            to={{
              pathname: "/user/view",
              state: { from: location },
            }}
          />
        ) : (
          children
        );
      }}
    />
  );
};
export const AdminRoute = ({ children, ...rest }) => {
  let token = getToken();
  let role = getRole();
  let path = role === "user" ? "/user" : "/login";
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return token && role === "admin" ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: path,
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};
export const getToken = () => {
  return localStorage.getItem("token") ? localStorage.getItem("token") : null;
};

export const getRole = () => {
  return localStorage.getItem("role") ? localStorage.getItem("role") : null;
};
