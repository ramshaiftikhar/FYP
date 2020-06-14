import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { useState } from "react";
import { Redirect } from "react-router-dom";
export const StartFundRaiserForm = (props) => {
  const [image, imageUpdater] = useState(null);
  return (
    <Formik
      validationSchema={validationschema}
      initialValues={{
        name: "",
        email: "",
        phone: "",
        categoryName: "",
        amount: 0,
        description: "",
      }}
      onSubmit={(values, { setSubmitting }) => {
        let completeForm = { ...values, file: image };
        console.log(completeForm);
        props.formHandler({
          formValues: { ...completeForm },
          formFilled: true,
        });
        setTimeout(() => {
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="form-row">
          <div className="col-12">
            <div className="form-group">
              <label htmlFor="">Title</label>
              <Field
                type="text"
                placeholder="e.g: Help us..."
                name="name"
                className="form-control"
              />
              <ErrorMessage name="name">
                {(msg) => <div className="text-danger mt-2">{msg}</div>}
              </ErrorMessage>
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
              <label htmlFor="">Email</label>
              <Field
                type="email"
                placeholder="e.g george@gmail.com"
                name="email"
                className="form-control"
              />
              <ErrorMessage name="email">
                {(msg) => <div className="text-danger mt-2">{msg}</div>}
              </ErrorMessage>
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
              <label htmlFor="">Category Name</label>
              <Field as="select" name="categoryName" className="form-control">
                <option>Choose your option</option>
                <option value="Misc">Misc</option>
                <option value="Food">Food</option>
                <option value="Cloth">Clothes</option>
                <option value="Education">Education</option>
                <option value="Disaster Relief">Disaster Relief</option>
                <option value="COVID">COVID</option>
                <option value="Bills">Bills</option>
                <option value="Environment">Environment</option>
                <option value="Animals/Pets">Animals/Pets</option>
              </Field>
              <ErrorMessage name="categoryName">
                {(msg) => <div className="text-danger mt-2">{msg}</div>}
              </ErrorMessage>
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
              <label htmlFor="">Amount</label>
              <Field type="number" name="amount" className="form-control" />
              <ErrorMessage name="amount">
                {(msg) => <div className="text-danger mt-2">{msg}</div>}
              </ErrorMessage>
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
              <label htmlFor="">Description</label>
              <Field
                as="textarea"
                name="description"
                className="form-control"
              />
              <ErrorMessage name="description">
                {(msg) => <div className="text-danger mt-2">{msg}</div>}
              </ErrorMessage>
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
              <label htmlFor="">Phone Number</label>
              <Field type="text" name="phone" className="form-control" />
              <ErrorMessage name="phone">
                {(msg) => <div className="text-danger mt-2">{msg}</div>}
              </ErrorMessage>
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
              <label htmlFor=""></label>
              <input
                type="file"
                accept="image/jpeg, image/png"
                onChange={(event) => imageUpdater(event.target.files[0])}
              />
            </div>
          </div>
          <div className="col-12 d-flex justify-content-center">
            <button
              className="btn btn-dark"
              type="submit"
              disabled={isSubmitting}
            >
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

const validationschema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required(),
  phone: yup
    .string()
    .required()
    .length(11, "Phone number should be 11 digit long 03XX-XXXXXXX"),
  categoryName: yup.string().required(),
  amount: yup.number().required().min(0, "Cannot enter value less than 0"),
  description: yup.string().required(),
});
