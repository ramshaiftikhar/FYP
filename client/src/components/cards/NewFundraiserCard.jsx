import React from "react";
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

export const NewFundraiserCard = (props) => {
  console.log(props);
  return (
    <MDBRow>
      <MDBCol md="12">
        <MDBCard wide cascade>
          <MDBView cascade>
            <MDBCardImage
              hover
              overlay="white-slight"
              className=" v-fundraiser card-img-top"
              src={props.image}
              alt="Card cap"
            />
          </MDBView>

          <MDBCardBody cascade className="text-center">
            <MDBCardTitle className="card-title">
              <h4 className="card-title">
                <strong>{props.name}</strong>
              </h4>
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
              <a href="!#" className="px-2 fa-lg li-ic">
                <MDBIcon className="text-success" icon="edit"></MDBIcon>
              </a>

              <a href="!#" className="px-2 fa-lg tw-ic">
                <MDBIcon className="text-danger" fa icon="trash"></MDBIcon>
              </a>
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
