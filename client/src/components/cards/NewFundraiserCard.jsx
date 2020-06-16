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
import styled from "styled-components";
import "./NewFundraiserCard.css";
import { useRouteMatch } from "react-router-dom";
export const NewFundraiserCard = (props) => {
  return (
    <MDBRow className="mb-3">
      <MDBCol md="12">
        <MDBCard wide cascade>
          <MDBView cascade>
            <StyledImage src={props.image} alt="Card cap" />
          </MDBView>

          <MDBCardBody cascade className="text-center">
            <MDBCardTitle className="card-title">
              <strong>{props.name}</strong>
            </MDBCardTitle>

            <h5 className="blue-text pb-2">
              <strong>{props.categoryName}</strong>
            </h5>
            <p className=" card-text pb-2">
              <strong>Phone no.: </strong>
              {props.phone}{" "}
            </p>
            <p className="card-text pb-2">
              <strong>Amount.: </strong> Rs. {props.amount}
            </p>

            <MDBCardText className="fundraiser-details-field">
              {props.description}
            </MDBCardText>
            <MDBCol md="12" className="d-flex justify-content-center">
              {props.children && props.children}
            </MDBCol>
            <MDBCol md="12" className="d-flex justify-content-center">
              <p className=" creation  text-center mt-4">
                Created at: {new Date(props.dateString).toLocaleString()}{" "}
              </p>
            </MDBCol>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
};
const StyledImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  object-position: 0 0;
`;
