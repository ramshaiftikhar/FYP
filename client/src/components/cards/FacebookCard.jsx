import React from "react";
import styled from "styled-components";
export const FacebookCard = (props) => {
  const linkRef = React.createRef();
  return (
    <div
      className="bg-white rounded shadow p-2 d-flex flex-column justify-content-between mb-2 cursor-pointer overflow-hidden"
      onClick={() => linkRef.current.click()}
    >
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
    </div>
  );
};
const StyledImage = styled.img`
  height: auto;
  width: 100%;
`;
