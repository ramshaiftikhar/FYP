import React from "react";
import styled from "styled-components";
export const Card = (props) => {
  const linkRef = React.createRef();

  return (
    <div
      className="bg-white rounded shadow p-2 mb-2 d-flex flex-column justify-content-between cursor-pointer overflow-hidden"
      onClick={() => linkRef.current.click()}
    >
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
    </div>
  );
};
