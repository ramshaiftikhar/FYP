import React from "react";
import { useState } from "react";
import {
  MDBJumbotron,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBCardBody,
  MDBCardText,
  MDBCardTitle,
} from "mdbreact";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./AllSearches.css";
import { Element } from "react-scroll";

import { useEffect } from "react";
const AllSearches = (props) => {
  const [categorySelected, categorySelector] = useState("All");
  const [search, searchUpdater] = useState("");
  const [loading, loadUpdate] = useState(false);
  const back = () => {
    window.history.back();
  };

  return (
    <>
      <div className="d-flex justify-content-between px-3 my-3">
        <button className="btn btn-light" onClick={back}>
          <i className="fas fa-chevron-left mr-1"></i>
          Back
        </button>

        <div></div>
      </div>

      <StyledElement name="searches-element">
        <MDBContainer className="mt-5 text-center">
          <MDBRow>
            <MDBCol>
              <MDBJumbotron>
                <MDBCardBody>
                  <h1 className="section-heading ">CHOOSE A TYPE</h1>

                  <MDBCardText className="card-text">
                    In our application, you cannot only view the different
                    fundraisers created directly through this website but also
                    other donation requests made through Twitter, Facebook and
                    Reddit. To view our application's fundraisers, click on the
                    verified icon. To view Facebook posts, click on the Facebook
                    icon and likewise for Twitter and Reddit. There are
                    different categories for each of these options like clothes,
                    education, environment etc. Choose a type and begin the
                    journey to help others!
                  </MDBCardText>
                  <hr className="my-4" />

                  <div className="container">
                    <div className="row">
                      <div className="col">
                        <StyledLink to="search/fundRaiser">
                          <div className="colorB3" id="email-div">
                            <h3 className="disappear">
                              <span>Verified</span>
                            </h3>
                            <i
                              className="fa fa-check fa-5x"
                              aria-hidden="true"
                            ></i>
                            <h3>
                              <span>Verified</span>
                            </h3>
                            <h3 className="disappear">
                              <span>Verified</span>
                            </h3>
                          </div>
                        </StyledLink>
                      </div>

                      <div className="col">
                        <StyledLink to="search/facebook">
                          <div className="colorB3" id="email-div">
                            <h3 className="disappear">
                              <span>Verified</span>
                            </h3>
                            <i
                              className="fab fa-facebook fa-5x"
                              aria-hidden="true"
                            ></i>
                            <h3>
                              <span>Facebook</span>
                            </h3>
                            <h3 className="disappear">
                              <span>Verified</span>
                            </h3>
                          </div>
                        </StyledLink>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col">
                        <div>
                          <h3>
                            <span></span>
                          </h3>
                        </div>
                      </div>
                      <div className="col">
                        <div>
                          <i className="" aria-hidden="true"></i>

                          <h3 className="weirdRow">
                            <span>Reddit</span>
                          </h3>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col">
                        <StyledLink to="search/twitter">
                          <div className=" colorB3" id="location-div">
                            <h3 className="disappear">
                              <span>Verified</span>
                            </h3>
                            <i
                              className="fab fa-twitter fa-5x"
                              aria-hidden="true"
                            ></i>
                            <h3>
                              <span>Twitter</span>
                            </h3>
                            <h3 className="disappear">
                              <span>Verified</span>
                            </h3>
                          </div>
                        </StyledLink>
                      </div>
                      <div className="col">
                        <StyledLink to="search/reddit">
                          <div className="colorB3" id="phone-div">
                            <h3 className="disappear">
                              <span>Verified</span>
                            </h3>
                            <i
                              className="fab fa-reddit fa-5x"
                              aria-hidden="true"
                            ></i>
                            <h3>
                              <span>Reddit</span>
                            </h3>
                            <h3 className="disappear">
                              <span>Verified</span>
                            </h3>
                          </div>
                        </StyledLink>
                      </div>
                    </div>
                  </div>
                </MDBCardBody>
              </MDBJumbotron>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </StyledElement>
    </>
  );
};

export default AllSearches;

const StyledElement = styled(Element)`
  padding-bottom: 20px;
`;
const StyledLink = styled(Link)`
  text-decoration: none !important;
`;
