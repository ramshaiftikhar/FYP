import React from "react";
import { MDBBtn, MDBCol, MDBCollapse } from "mdbreact";

const CategoryCardTweets = ({ post, toggleCollapse, collapseID }) => {
  return (
    <MDBCol md={4}>
      <div className="card-wrapper">
        <div style={{ marginBottom: 10 }}>
          <img
            style={{ borderRadius: 10 }}
            src={post.image}
            alt=""
            width={80}
          />
        </div>
        <div className="othersTitle">{post.text}</div>

        <MDBBtn
          color="dark"
          onClick={() => toggleCollapse(post.text)}
          style={{ width: "80%", height: 30, margin: "20px auto 0 auto" }}
        >
          {collapseID !== post.text ? "Show More" : "Show Less"}
        </MDBBtn>

        <MDBCollapse id={post.text} isOpen={collapseID}>
          <p className="description-wrapper">
            <div className="item-text">
              <b>Description:</b> {post.description}
            </div>
            <div className="item-text">
              <b>Amount Needed:</b> {post.amount}
            </div>
            <div className="item-text">
              <b>Email:</b> {post.email}
            </div>
            <div className="item-text">
              <b>Phone:</b> {post.phone}
            </div>
            <div className="item-text">
              <b>Date Created:</b> {post.dateCreated}
            </div>
          </p>
        </MDBCollapse>
      </div>
    </MDBCol>
  );
};

export default CategoryCardTweets;
