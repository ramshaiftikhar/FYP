import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import LoginSchema from "./LoginSchema";
import loginImg from "../../../login.svg";

const LoginForm = (props) => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={LoginSchema}
      onSubmit={(values, { setSubmitting }) => {
        props.formHandler({ ...values, filled: true });
        setTimeout(() => {
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div style={{ textAlign: "center" }} className="header">
            Login
          </div>
          <div className="content">
            <div className="image">
              <img src={loginImg} />
            </div>
            <div className="form">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <Field type="email" name="email" placeholder="Email" />
                <ErrorMessage name="email">
                  {(msg) => <div className="error-message">{msg}</div>}
                </ErrorMessage>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <Field type="password" name="password" placeholder="Password" />
                <ErrorMessage name="password">
                  {(msg) => <div className="error-message">{msg}</div>}
                </ErrorMessage>
              </div>
            </div>
          </div>
          <div className="footer">
            <div>
              <button
                type="submit"
                className="login-btn"
                disabled={isSubmitting}
              >
                Login
              </button>{" "}
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
