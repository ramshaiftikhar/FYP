import React, { useEffect, useState } from "react";
import "./error.css";
import { BrowserRouter as Redirect } from "react-router-dom";
import axios from "axios";
import SignupForm from "./SignupForm/SignupForm";
import { useStore } from "../../context/AuthContext";
export const Register = (props) => {
  const [form, formUpdater] = useState({
    name: "",
    email: "",
    password: "",
    filled: false,
  });
  const [state, dispatch] = useStore();
  useEffect(() => {
    if (form.filled) {
      axios
        .post("/user/", {
          email: form.email,
          password: form.password,
        })
        .then((response) => {
          if (!response.data.errmsg) {
            dispatch({
              type: "login",
              payload: { email: response.data.email },
            });
          } else {
            console.log("email already taken");
          }
        })
        .catch((error) => {
          console.log("signup error: ");
          console.log(error);
        });
    }
  }, [form]);

  if (state.loggedIn) {
    return <Redirect to={{ pathname: "/" }} />;
  } else {
    return (
      <div className="base-container" ref={props.containerRef}>
        <SignupForm formHandler={formUpdater} />
      </div>
    );
  }
};
