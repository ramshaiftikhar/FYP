import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
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
              </ErrorMessage>
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
              <h5 className="left-input"><label htmlFor="">Email</label></h5>
              <Field
                type="email"
                placeholder="george@gmail.com"
                name="email"
                className="form-control"
              />
              <ErrorMessage name="email">
                {(msg) => <div className=" left-input text-danger mt-2">{msg}</div>}
              </ErrorMessage>
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
            <h5 className="left-input"><label htmlFor="">Category Name</label></h5>
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
                {(msg) => <div className="left-input text-danger mt-2">{msg}</div>}
              </ErrorMessage>
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
            <h5 className="left-input"> <label htmlFor="">Amount</label> </h5>
              <Field type="number" name="amount"className="form-control" />
              <ErrorMessage name="amount">
                {(msg) => <div className=" left-input text-danger mt-2">{msg}</div>}
              </ErrorMessage>
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
            <h5 className="left-input"> <label htmlFor="">Description</label> </h5> 
              <Field
                as="textarea"
                placeholder="Jane McCready is used to her 5-year-old son being gawped at as if he were a circus freak but she will never be reconciled to it...."
                name="description"
                className="form-control"
              />
              <ErrorMessage name="description">
                {(msg) => <div className="left-input text-danger mt-2">{msg}</div>}
              </ErrorMessage>
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
            <h5 className="left-input"> <label htmlFor="">Phone Number</label> </h5>
              <Field type="text" name="phone" placeholder= "+92-333XXXXXXX"className="form-control" />
              <ErrorMessage name="phone">
                {(msg) => <div className=" left-input text-danger mt-2">{msg}</div>}
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
              className="btn btn-primary mr-2"
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
 
});
