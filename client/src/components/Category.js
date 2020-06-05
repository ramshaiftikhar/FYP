import React, { Component } from "react";
import {
  MDBInput,
  MDBCol,
  MDBBtn,
  MDBCollapse,
  MDBContainer,
  MDBRow
} from "mdbreact";
import axios from "axios";
import { withRouter } from "react-router-dom";
import "./Category.css";

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: null,
      fundRaisingPosts: null,
      collapseID: "",
      searchVal: ""
    };
  }

  componentDidMount() {
    axios
      .get("/getFundRaisingPosts/")
      .then(res => {
        console.log("Res is", res.data.fundRaisePosts);
        this.setState({ fundRaisingPosts: res.data.fundRaisePosts });
      })
      .catch(err => {
        console.log(err);
      });
  }
  toggleCollapse = collapseID => {
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));
  };
  CategoryCard = (post, toggleCollapse, collapseID) => {
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
          <div className="name">{post.name}</div>

          <MDBBtn
            color="dark"
            onClick={() => toggleCollapse(post.name)}
            style={{ width: "80%", height: 30, margin: "20px auto 0 auto" }}
          >
            {collapseID !== post.name ? "Show More" : "Show Less"}
          </MDBBtn>

          <MDBCollapse id={post.name} isOpen={collapseID}>
            <p className="description-wrapper">
              <div>
                <b>Description:</b> {post.description}
              </div>
              <div>
                <b>Amount Needed:</b> {post.amount}
              </div>
              <div>
                <b>Email:</b> {post.email}
              </div>
              <div>
                <b>Phone:</b> {post.phone}
              </div>
              <div>
                <b>Date Created:</b> {post.dateCreated}
              </div>
            </p>
          </MDBCollapse>
        </div>
      </MDBCol>
    );
  };

  render() {
    const { loading, fundRaisingPosts, searchVal } = this.state;
    const { category } = this.props.location.state;
    const sorted =
      fundRaisingPosts &&
      fundRaisingPosts.sort((a, b) => new Date(b.dateString) - new Date(a.dateString));
    console.log("Sorrwd", sorted);
    return (
      <div>
        {loading ? (
          <img src="/img/loading.gif" alt="" />
        ) : (
          <div style={{ margin: "100px 20px 20px 20px" }}>
            <div style={{ fontSize: 32, textAlign: "center" }}>
              {category.title}
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <MDBCol md="6">
                <MDBInput
                  hint="Search"
                  type="text"
                  containerClass="mt-4"
                  style={{ height: 50 }}
                  onChange={e => this.setState({ searchVal: e.target.value })}
                />
              </MDBCol>
            </div>
            <div style={{ fontSize: 32, textAlign: "center" }}>Verified</div>
            <MDBContainer>
              <MDBRow>
                {sorted &&
                  sorted.map(post => {
                    if (searchVal !== "") {
                      if (
                        post.name.toLowerCase().includes(searchVal) &&
                        category.title === post.categoryName
                      ) {
                        return this.CategoryCard(
                          post,
                          this.toggleCollapse,
                          this.state.collapseID
                        );
                      }
                    } else {
                      if (
                        post.name.includes(searchVal) &&
                        category.title === post.categoryName
                      ) {
                        return this.CategoryCard(
                          post,
                          this.toggleCollapse,
                          this.state.collapseID
                        );
                      }
                    }
                  })}
              </MDBRow>
            </MDBContainer>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(Category);
