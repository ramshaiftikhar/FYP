import React from "react";
import styled from "styled-components";
export const RedditCard = (props) => {
  const linkRef = React.createRef();

  return (
    <div
      className="bg-white rounded shadow mb-2 p-2 d-flex flex-column justify-content-between cursor-pointer overflow-hidden"
      onClick={() => linkRef.current.click()}
    >
      <div>
        <div className="d-flex">
          <div className="flex-grow-1">
            <h5 className="text-capitalize">{props.title}</h5>
            <h6 className="text-capitalize">Category: {props.categoryName}</h6>
            <h6 className="text-secondary">SubReddit: {props.subreddit}</h6>
          </div>
          <i className="fab fa-reddit align-self-start text-primary fa-2x"></i>
        </div>
        <div className="font-weight-bold text-secondary my-2">{props.text}</div>
      </div>
      <div className="d-flex justify-content-between">
        <div>Created at: {new Date(props.date).toLocaleString()}</div>
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
