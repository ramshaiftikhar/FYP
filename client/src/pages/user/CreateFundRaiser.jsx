import React from "react";
import { StartFundRaiserForm } from "../../sections/forms";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
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
          this.props.history.push("/");
        })
        .catch((error) => {
          errorUpdater(null);
          console.log(error);
        });
    }
  }, [form]);
  return (
    <div className="container">
      {error && <div className="text-danger mb-2">{error}</div>}
      <StartFundRaiserForm formHandler={formUpdater} />
    </div>
  );
};

export default CreateFundRaiser;
