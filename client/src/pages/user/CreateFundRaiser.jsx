import React from "react";
<<<<<<< HEAD
import { StartFundRaiserForm } from "../../components/forms";
=======
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { StartFundRaiserForm } from "../../components/forms/StartFundRaiser";


>>>>>>> 46d009dc8abfbee4a9cdfdb3525b6ac6d147eafd
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
<<<<<<< HEAD
const CreateFundRaiser = (props) => {
  const [form, formUpdater] = useState({
    formValues: {
      name: "",
      email: "",
      categoryName: "",
      amount: 0,
      description: "",
      phoneNumber: "",
      file: null,
    },
    formFilled: false,
  });
  const [error, errorUpdater] = useState(null);
  const [redirect, redirectFlag] = useState(false);
  useEffect(() => {
    if (form.formValues.file === null && form.formFilled === true) {
      errorUpdater("Please upload picture");
    } else if (form.formFilled) {
      console.log(form.formValues);
      let formData = new FormData();
      Object.keys(form.formValues).forEach((res) =>
        formData.append(res, form.formValues[res])
      );
      axios
        .post("/addFundRaisingPost/", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          errorUpdater(null);
          console.log("response", response.data);
          alert("Submitted successfully");
          redirectFlag(true);
        })
        .catch((error) => {
          errorUpdater(null);
          console.log(error);
        });
    }
  }, [form]);
  if (redirect) {
    return <Redirect to="/user/view" />;
  } else {
    return (
      <div className="container">
        {error && <div className="text-danger mb-2">{error}</div>}
        <StartFundRaiserForm formHandler={formUpdater} />
      </div>
    );
  }
};

export default CreateFundRaiser;
=======

const  CreateFundraiser = (props) => {

    const [form, formUpdater] = useState({
        formValues: {
          name: "",
          email: "",
          categoryName: "",
          amount: 0,
          description: "",
          phoneNumber: "",
          file: null,
        },
        formFilled: false,
      });
      const [error, errorUpdater] = useState(null);
        const [redirect, redirectFlag] = useState(false);
        useEffect(() => {
            if (form.formValues.file === null && form.formFilled === true) {
            errorUpdater("Please upload picture");
            } else if (form.formFilled) {
            console.log(form.formValues);
            let formData = new FormData();
            Object.keys(form.formValues).forEach((res) =>
                formData.append(res, form.formValues[res])
            );
            axios
                .post("/addFundRaisingPost/", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
                })
                .then((response) => {
                errorUpdater(null);
                console.log("response", response.data);
                alert("Submitted successfully");
                redirectFlag(true);
                })
                .catch((error) => {
                errorUpdater(null);
                console.log(error);
                });
            }
        }, [form]);
        if (redirect) {
            return <Redirect to="/user/view" />;
        } else {
  return (
    <MDBContainer className="mt-5 text-center">
      <MDBRow>
        <MDBCol>
          <MDBJumbotron>
            <h2 className="h1 display-3">Fundraiser Details</h2>
            <p className="lead">
              You are only a couple of steps away from helping yourself or someone else!
            </p>
            <hr className="my-2" />
            <div className="container">
            {error && <div className="text-danger mb-2">{error}</div>}
            <StartFundRaiserForm  formHandler={formUpdater} />
            </div>
            
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}
};

export default CreateFundraiser;
>>>>>>> 46d009dc8abfbee4a9cdfdb3525b6ac6d147eafd
