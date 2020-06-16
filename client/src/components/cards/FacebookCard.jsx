import React from "react";
import styled from "styled-components";
<<<<<<< HEAD
export const FacebookCard = (props) => {
  const linkRef = React.createRef();
  return (
=======
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import "./FacebookCard.css";
export const FacebookCard = (props) => {
  const linkRef = React.createRef();
  return (
    <MDBCol  md='12' >
      <MDBCard >
>>>>>>> 46d009dc8abfbee4a9cdfdb3525b6ac6d147eafd
    <div
      className="bg-white rounded shadow p-2 d-flex flex-column justify-content-between mb-2 cursor-pointer overflow-hidden"
      onClick={() => linkRef.current.click()}
    >
<<<<<<< HEAD
      <div>
        <div className="d-flex">
          <div className="flex-grow-1">
            <h6 className="text-capitalize">Category: {props.categoryName}</h6>
          </div>
          <i className="fab fa-facebook align-self-start text-primary fa-2x"></i>
        </div>
        <div className="font-weight-bold text-secondary my-2">
          {props.comp_text}
        </div>
        <div className="d-flex justify-content-center">
          {props.images && <StyledImage src={props.images} />}
        </div>
      </div>
      <div className="d-flex justify-content-between">
        <div>Created at: {new Date(props.time).toLocaleString()}</div>
=======
      <MDBCardBody  cascade className="text-center">
      <div>
        <div className="d-flex">
          <div className="flex-grow-1">
         
          <MDBCardTitle className="text-capitalize">Category: {props.categoryName} </MDBCardTitle>
          <hr/>
          </div>
          <i className="fab fa-facebook align-self-start text-primary fa-2x"></i>
        </div>
        
        
        <MDBCardText className="fb-content"> 
          {props.comp_text}
         
        <div className="d-flex justify-content-center">
          {props.images && <StyledImage src={props.images} />}
        </div>
        </MDBCardText>
      </div>
      <div className="d-flex justify-content-between">
      <MDBCardText> <div class="created-at">Created at: {new Date(props.time).toLocaleString()}</div></MDBCardText>
>>>>>>> 46d009dc8abfbee4a9cdfdb3525b6ac6d147eafd
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
<<<<<<< HEAD
    </div>
=======
      </MDBCardBody>
    </div>
    </MDBCard>
    </MDBCol>
>>>>>>> 46d009dc8abfbee4a9cdfdb3525b6ac6d147eafd
  );
};
const StyledImage = styled.img`
  height: auto;
  width: 100%;
`;
