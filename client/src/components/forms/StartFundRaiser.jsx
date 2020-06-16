import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
<<<<<<< HEAD
import * as yup from "yup";
import { useState } from "react";
import { Redirect } from "react-router-dom";
export const StartFundRaiserForm = (props) => {
  const [image, imageUpdater] = useState(null);
  return (
    <Formik
      validationSchema={validationschema}
=======
import * as Yup from "yup";
import { useState } from "react";
import { Redirect } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import './StartFundraiser.css'
export const StartFundRaiserForm = (props) => {
  const [image, imageUpdater] = useState(null);
  
  return (
    <Formik
      validationSchema={validationschema}
      
      
>>>>>>> 46d009dc8abfbee4a9cdfdb3525b6ac6d147eafd
      initialValues={{
        name: "",
        email: "",
        phone: "",
        categoryName: "",
        amount: 0,
        description: "",
<<<<<<< HEAD
=======
        
>>>>>>> 46d009dc8abfbee4a9cdfdb3525b6ac6d147eafd
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
<<<<<<< HEAD
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
=======
          
          <div className="col-12">
            <div className="form-group">
              <p className="h4 text-center mb-4">Create Fundraiser</p>
              
              <h5 className="left-input"><label className="grey-text" htmlFor="defaultFormRegisterNameEx">Title</label> </h5>
              <Field
              
                type="text"
                placeholder="Help a disabled 5 year old live a normal life"
                name="name"
                className="form-control"
              />
              <ErrorMessage  name="name">
                {(msg) => <div className="left-input text-danger mt-2">{msg}</div>}
>>>>>>> 46d009dc8abfbee4a9cdfdb3525b6ac6d147eafd
              </ErrorMessage>
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
<<<<<<< HEAD
              <label htmlFor="">Email</label>
              <Field
                type="email"
                placeholder="e.g george@gmail.com"
=======
              <h5 className="left-input"><label htmlFor="">Email</label></h5>
              <Field
                type="email"
                placeholder="george@gmail.com"
>>>>>>> 46d009dc8abfbee4a9cdfdb3525b6ac6d147eafd
                name="email"
                className="form-control"
              />
              <ErrorMessage name="email">
<<<<<<< HEAD
                {(msg) => <div className="text-danger mt-2">{msg}</div>}
=======
                {(msg) => <div className=" left-input text-danger mt-2">{msg}</div>}
>>>>>>> 46d009dc8abfbee4a9cdfdb3525b6ac6d147eafd
              </ErrorMessage>
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
<<<<<<< HEAD
              <label htmlFor="">Category Name</label>
=======
            <h5 className="left-input"><label htmlFor="">Category Name</label></h5>
>>>>>>> 46d009dc8abfbee4a9cdfdb3525b6ac6d147eafd
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
<<<<<<< HEAD
                {(msg) => <div className="text-danger mt-2">{msg}</div>}
=======
                {(msg) => <div className="left-input text-danger mt-2">{msg}</div>}
>>>>>>> 46d009dc8abfbee4a9cdfdb3525b6ac6d147eafd
              </ErrorMessage>
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
<<<<<<< HEAD
              <label htmlFor="">Amount</label>
              <Field type="number" name="amount" className="form-control" />
              <ErrorMessage name="amount">
                {(msg) => <div className="text-danger mt-2">{msg}</div>}
=======
            <h5 className="left-input"> <label htmlFor="">Amount</label> </h5>
              <Field type="number" name="amount"className="form-control" />
              <ErrorMessage name="amount">
                {(msg) => <div className=" left-input text-danger mt-2">{msg}</div>}
>>>>>>> 46d009dc8abfbee4a9cdfdb3525b6ac6d147eafd
              </ErrorMessage>
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
<<<<<<< HEAD
              <label htmlFor="">Description</label>
              <Field
                as="textarea"
=======
            <h5 className="left-input"> <label htmlFor="">Description</label> </h5> 
              <Field
                as="textarea"
                placeholder="Jane McCready is used to her 5-year-old son being gawped at as if he were a circus freak but she will never be reconciled to it...."
>>>>>>> 46d009dc8abfbee4a9cdfdb3525b6ac6d147eafd
                name="description"
                className="form-control"
              />
              <ErrorMessage name="description">
<<<<<<< HEAD
                {(msg) => <div className="text-danger mt-2">{msg}</div>}
=======
                {(msg) => <div className="left-input text-danger mt-2">{msg}</div>}
>>>>>>> 46d009dc8abfbee4a9cdfdb3525b6ac6d147eafd
              </ErrorMessage>
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
<<<<<<< HEAD
              <label htmlFor="">Phone Number</label>
              <Field type="text" name="phone" className="form-control" />
              <ErrorMessage name="phone">
                {(msg) => <div className="text-danger mt-2">{msg}</div>}
=======
            <h5 className="left-input"> <label htmlFor="">Phone Number</label> </h5>
              <Field type="text" name="phone" placeholder= "+92-333XXXXXXX"className="form-control" />
              <ErrorMessage name="phone">
                {(msg) => <div className=" left-input text-danger mt-2">{msg}</div>}
>>>>>>> 46d009dc8abfbee4a9cdfdb3525b6ac6d147eafd
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
<<<<<<< HEAD
              className="btn btn-dark"
=======
              className="btn btn-primary mr-2"
>>>>>>> 46d009dc8abfbee4a9cdfdb3525b6ac6d147eafd
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

<<<<<<< HEAD
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
=======
const validationschema = Yup.object().shape({
  name: Yup.string().required('Fundraiser title is a required field.'),
  email: Yup.string()
  .email('Email is invalid.')
  .required('Email is a required field'),
  phone: Yup
    .string()
    .required("Phone number is a required field.")
    .length(11, "Phone number should be 11 digit long 03XX-XXXXXXX."),
  categoryName: Yup.string().required("Category name is a required field."),
  amount: Yup.number()
  .required('Amount is a required field.')
  .min(0, "Cannot enter value less than 0"),
  description: Yup.string().required("Description is a required field."),
 
>>>>>>> 46d009dc8abfbee4a9cdfdb3525b6ac6d147eafd
});
