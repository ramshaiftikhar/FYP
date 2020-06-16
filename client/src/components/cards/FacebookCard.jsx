import React from "react";
import styled from "styled-components";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
} from "mdbreact";
import "./FacebookCard.css";
export const FacebookCard = (props) => {
  const linkRef = React.createRef();
  return (
    <MDBCol md="12">
      <MDBCard>
        <div
          className="bg-white rounded shadow p-2 d-flex flex-column justify-content-between mb-2 cursor-pointer overflow-hidden"
          onClick={() => linkRef.current.click()}
        >
          <MDBCardBody cascade className="text-center">
            <div>
              <div className="d-flex">
                <div className="flex-grow-1">
                  <MDBCardTitle className="text-capitalize">
                    Category: {props.categoryName}{" "}
                  </MDBCardTitle>
                  <hr />
                </div>
                <i className="fab fa-facebook align-self-start text-primary fa-2x"></i>
              </div>

              <MDBCardText className="fb-content">
                {props.comp_text}
              </MDBCardText>
              <div className="d-flex justify-content-center">
                {props.images && <StyledImage src={props.images} />}
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <MDBCardText className="created-at">
                {" "}
                Created at: {new Date(props.time).toLocaleString()}
              </MDBCardText>
              <a
                href={props.post_url}
                className="text-primary text-decoration-none"
                ref={linkRef}
                target="_blank"
              >
                {" "}
                <i className="fas fa-link mr-1"></i> Link{" "}
              </a>
            </div>
          </MDBCardBody>
        </div>
      </MDBCard>
    </MDBCol>
  );
};
const StyledImage = styled.img`
  height: auto;
  width: 100%;
`;
