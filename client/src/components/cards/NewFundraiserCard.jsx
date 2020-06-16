import React, { useState } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBView,
  MDBIcon,
} from "mdbreact";
import "./NewFundraiserCard.css";
import { useEffect } from "react";
import axios from "axios";
import { useRouteMatch } from "react-router-dom";
export const NewFundraiserCard = ({ data, update }) => {
  const match = useRouteMatch();
  console.log(data, update);
  let [del, delFlag] = useState(false);
  useEffect(() => {
    if (del) {
      axios
        .delete(`/fundRaising/${data._id}`)
        .then((res) => {
          console.log("deleted");
          update.toggler(!update.componentUpdate);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [del]);

  console.log(data);
  return (
    <MDBRow>
      <MDBCol md="12">
        <MDBCard wide cascade>
          <MDBView cascade>
            <MDBCardImage
              hover
              overlay="white-slight"
              className=" v-fundraiser card-img-top"
              src={data.image}
              alt="Card cap"
            />
          </MDBView>

          <MDBCardBody cascade className="text-center">
            <MDBCardTitle className="card-title">
              <strong>{data.name}</strong>
            </MDBCardTitle>

            <h5 className="blue-text pb-2">
              <strong>{data.categoryName}</strong>
            </h5>
            <p className=" card-text pb-2">
              <strong>Phone no.: </strong>
              {data.phone}{" "}
            </p>
            <p className="card-text pb-2">
              <strong>Amount.: </strong> Rs. {data.amount}
            </p>

            <MDBCardText className="fundraiser-details-field">
              {data.description}
            </MDBCardText>
            {match.path === "/user/view" && (
              <MDBCol md="12" className="d-flex justify-content-center">
                <MDBIcon
                  className="text-success px-2 fa-lg li-ic"
                  icon="edit"
                ></MDBIcon>
                <MDBIcon
                  className="text-danger px-2 fa-lg li-ic cursor-pointer"
                  icon="trash"
                  onClick={() => delFlag(true)}
                ></MDBIcon>
              </MDBCol>
            )}
            <MDBCol md="12" className="d-flex justify-content-center">
              <p className=" creation  text-center mt-4">
                Created at: {new Date(data.dateString).toLocaleString()}{" "}
              </p>
            </MDBCol>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
};
