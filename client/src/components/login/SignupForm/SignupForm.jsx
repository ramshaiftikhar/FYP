import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import SignupSchema from "./SignupSchema";
import loginImg from "../../../login.svg";

const SignupForm = (props) => {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={(values, { setSubmitting }) => {
        props.formHandler({ ...values, filled: true });
        setTimeout(() => {
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
<<<<<<< HEAD
          <div className="header">Register</div>
=======
          <div style={{textAlign:"center"}}className="header">Register</div>
>>>>>>> 46d009dc8abfbee4a9cdfdb3525b6ac6d147eafd
          <div className="content">
            <div className="image">
              <img src={loginImg} />
            </div>
            <div className="form">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <Field type="text" name="name" placeholder="Your name" />
                <ErrorMessage name="name">
                  {(msg) => <div className="error-message">{msg}</div>}
                </ErrorMessage>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <Field type="email" name="email" placeholder="Your email" />
                <ErrorMessage name="email">
                  {(msg) => <div className="error-message">{msg}</div>}
                </ErrorMessage>
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <Field
                  type="password"
                  name="password"
                  placeholder="Your password"
                />
                <ErrorMessage name="password">
                  {(msg) => <div className="error-message">{msg}</div>}
                </ErrorMessage>
              </div>
              <div className="footer">
                <button
                  type="submit"
                  className="login-btn"
                  disabled={isSubmitting}
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SignupForm;
