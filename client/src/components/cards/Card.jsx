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
import "./Card.css";
export const Card = (props) => {
  const linkRef = React.createRef();

  return (
    <MDBCol>
      <MDBCard>
        <div
          className="bg-white rounded shadow p-2 mb-2 d-flex flex-column justify-content-between cursor-pointer overflow-hidden"
          onClick={() => linkRef.current.click()}
        >
          <MDBCardBody>
            <div className="d-flex">
              <div className="flex-grow-1">
                <MDBCardTitle className="text-capitalize">
                  Category: {props.categoryName}{" "}
                </MDBCardTitle>
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
            <MDBCardText>
              {" "}
              <div className=" text-secondary my-2">{props.text}</div>
            </MDBCardText>
            <div className="d-flex justify-content-between">
              <MDBCardText>
                {" "}
                <div class="created-at">
                  Created at: {new Date(props.created_at).toLocaleString()}
                </div>{" "}
              </MDBCardText>
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
          </MDBCardBody>
        </div>
      </MDBCard>
    </MDBCol>
  );
};
