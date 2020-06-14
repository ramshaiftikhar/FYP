import React from "react";
import "./error.css";

import { Redirect } from "react-router-dom";
import axios from "axios";
import { useStore } from "../../context/AuthContext";
import LoginForm from "./LoginForm/LoginForm";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
export const Login = (props) => {
  let location = useLocation();
  const [state, dispatch] = useStore();
  const [form, formUpdater] = useState({
    email: "",
    password: "",
    filled: false,
  });
  let { from } = location.state || { from: { pathname: "/user/view" } };
  useEffect(() => {
    if (form.filled) {
      axios
        .post("/user/login", {
          username: form.email,
          password: form.password,
        })
        .then((response) => {
          console.log("login response: ");
          console.log(response);
          if (response.status === 200) {
            dispatch({
              type: "login",
              payload: { email: JSON.parse(response.config.data).username },
            });
          }
        })
        .catch((error) => {
          console.log("login error: ");
          console.log(error);
        });
    }
  });
  console.log(from);
  if (state.loggedIn) {
    return <Redirect to={from} />;
  } else {
    return (
      <div className="base-container" ref={props.containerRef}>
        <LoginForm formHandler={formUpdater} />
      </div>
    );
  }
};
