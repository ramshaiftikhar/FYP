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
import "./RedditCard.css";

export const RedditCard = (props) => {
  const linkRef = React.createRef();

  return (
    <MDBCol md="12">
      <MDBCard className="reddit-card" style={{ width: "22rem" }}>
        <div
          className="reddit bg-white rounded shadow mb-2 p-2 d-flex flex-column justify-content-between cursor-pointer overflow-hidden"
          onClick={() => linkRef.current.click()}
        >
          <MDBCardBody>
            <div>
              <div className="social-media-div"></div>
              <div className="d-flex">
                <div className="flex-grow-1">
                  <MDBCardTitle className=" text-capitalize">
                    {props.title}
                  </MDBCardTitle>
                  <hr />

                  <h6 className="text-capitalize">
                    Category: {props.categoryName}
                  </h6>
                  <h6 className="text-secondary">
                    SubReddit: {props.subreddit}
                  </h6>
                </div>

                <i className="fab fa-reddit align-center text-primary fa-3x"></i>

                <hr></hr>
              </div>
              <MDBCardText className="reddit-content">{props.text}</MDBCardText>
            </div>
            <div className="d-flex justify-content-between">
              <MDBCardText>
                {" "}
                <div class="created-at">
                  Created at: {new Date(props.date).toLocaleString()}
                </div>{" "}
              </MDBCardText>
              <MDBBtn>
                <a
                  href={props.post_url}
                  className="text-primary text-decoration-none"
                  ref={linkRef}
                  target="_blank"
                >
                  {" "}
                  <i className="fas fa-link mr-1"></i> Link{" "}
                </a>
              </MDBBtn>
            </div>
          </MDBCardBody>
        </div>
      </MDBCard>
    </MDBCol>
  );
};
