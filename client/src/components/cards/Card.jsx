import React from "react";
import styled from "styled-components";
<<<<<<< HEAD
=======
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import './Card.css';
>>>>>>> 46d009dc8abfbee4a9cdfdb3525b6ac6d147eafd
export const Card = (props) => {
  const linkRef = React.createRef();

  return (
<<<<<<< HEAD
=======
    <MDBCol>
      <MDBCard>
>>>>>>> 46d009dc8abfbee4a9cdfdb3525b6ac6d147eafd
    <div
      className="bg-white rounded shadow p-2 mb-2 d-flex flex-column justify-content-between cursor-pointer overflow-hidden"
      onClick={() => linkRef.current.click()}
    >
<<<<<<< HEAD
      <div className="d-flex">
        <div className="flex-grow-1">
          <h6 className="text-capitalize">Category: {props.categoryName}</h6>
          <div className="d-flex flex-wrap">
            tags:
            {props.entities.hashtags.map((res, index) => (
              <div className="text-secondary mx-2 font-weight-bold" key={index}>
                {`#${res.text}`}
              </div>
            ))}
            <div className="text-secondary font-weight-bold">
              {props.entities.hashtags.length === 0 && "no tags"}
            </div>
          </div>
        </div>
        <i className="fab fa-twitter align-self-start text-primary fa-2x"></i>
      </div>
      <div className="font-weight-bold text-secondary my-2">{props.text}</div>
      <div className="d-flex justify-content-between">
        <div>Created at: {new Date(props.created_at).toLocaleString()}</div>
=======
      <MDBCardBody> 
      <div className="d-flex">
        <div className="flex-grow-1">
        <MDBCardTitle className="text-capitalize">Category: {props.categoryName} </MDBCardTitle>
        <hr></hr>
        <MDBCardText>
          <div className="d-flex flex-wrap">
            Tags:
            {props.entities.hashtags.map((res, index) => (
              <div className="text-secondary  " key={index}>
                {`#${res.text}`}
              </div>
            ))}
            <div className="text-secondary ">
              {props.entities.hashtags.length === 0 && "no tags"}
            </div>
          </div>
          </MDBCardText>
        </div>
        <i className="fab fa-twitter align-self-start text-primary fa-2x"></i>
      </div>
      <MDBCardText> <div className=" text-secondary my-2">{props.text}</div></MDBCardText>
      <div className="d-flex justify-content-between">
      <MDBCardText> <div class="created-at">Created at: {new Date(props.created_at).toLocaleString()}</div> </MDBCardText>
>>>>>>> 46d009dc8abfbee4a9cdfdb3525b6ac6d147eafd
        <a
          href={`https://twitter.com/${props.user.id}/status/${props.id}`}
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
