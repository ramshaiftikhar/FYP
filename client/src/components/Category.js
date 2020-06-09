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
import CategoryCardFb from "./CategoryCardFB";
import CategoryCardReddits from "./CategoryCardReddits";
import CategoryCardTweets from "./CategoryCardTweets";

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: null,
      fundRaisingPosts: null,
      collapseID: "",
      searchVal: "",
      tweetsPosts: null,
      fBPosts: null,
      redditsPosts: null
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
    axios
      .get("/getTweetsPosts/")
      .then(res => {
        console.log("Res is Tweets", res.data.tweetsPosts);
        this.setState({ tweetsPosts: res.data.tweetsPosts });
      })
      .catch(err => {
        console.log(err);
      });
    axios
      .get("/getFBPosts/")
      .then(res => {
        console.log("Res is FB", res.data.fBPosts);
        this.setState({ fBPosts: res.data.fBPosts });
      })
      .catch(err => {
        console.log(err);
      });
    axios
      .get("/getRedditsPosts/")
      .then(res => {
        console.log("Res is Reddits", res.data.redditsPosts);
        this.setState({ redditsPosts: res.data.redditsPosts });
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
  CategoryCardVerified = (post, toggleCollapse, collapseID) => {
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
    const {
      loading,
      fundRaisingPosts,
      searchVal,
      redditsPosts,
      tweetsPosts,
      fBPosts
    } = this.state;
    const { category } = this.props.location.state;
    const sorted =
      fundRaisingPosts &&
      fundRaisingPosts.sort(
        (a, b) => new Date(b.dateString) - new Date(a.dateString)
      );
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
            <div style={{ marginTop: 40 }}></div>
            <hr style={{ width: "20%" }} />
            <div
              style={{
                fontSize: 32,
                textAlign: "center",
                color: "rgba(0,0,0,0.6)"
              }}
            >
              Verified
            </div>
            <hr style={{ width: "20%" }} />
            <MDBContainer>
              <MDBRow>
                {sorted &&
                  sorted.map(post => {
                    if (searchVal !== "") {
                      if (
                        post.name.toLowerCase().includes(searchVal) &&
                        category.title.toLowerCase() === post.categoryName
                      ) {
                        return this.CategoryCardVerified(
                          post,
                          this.toggleCollapse,
                          this.state.collapseID
                        );
                      }
                    } else {
                      if (
                        post.name.includes(searchVal) &&
                        category.title.toLowerCase() === post.categoryName
                      ) {
                        return this.CategoryCardVerified(
                          post,
                          this.toggleCollapse,
                          this.state.collapseID
                        );
                      }
                    }
                  })}
              </MDBRow>
            </MDBContainer>

            <hr style={{ width: "20%" }} />
            <div
              style={{
                fontSize: 32,
                textAlign: "center",
                color: "rgba(0,0,0,0.6)"
              }}
            >
              Live Feed - Twitter
            </div>
            <hr style={{ width: "20%" }} />
            <MDBContainer>
              <MDBRow>
                {tweetsPosts &&
                  tweetsPosts.map(post => {
                    if (searchVal !== "") {
                      if (
                        post.text.toLowerCase().includes(searchVal) &&
                        category.title.toLowerCase() === post.categoryName
                      ) {
                        return (
                          <CategoryCardTweets
                            post={post}
                            toggleCollapse={this.toggleCollapse}
                            collapseID={this.state.collapseID}
                          />
                        );
                      }
                    } else {
                      if (post.text && post.entities.urls.expanded_url) {
                        if (
                          post.text.includes(searchVal) &&
                          category.title.toLowerCase() === post.categoryName
                        ) {
                          return (
                            <CategoryCardTweets
                              post={post}
                              toggleCollapse={this.toggleCollapse}
                              collapseID={this.state.collapseID}
                            />
                          );
                        }
                      }
                    }
                  })}
              </MDBRow>
            </MDBContainer>

            <hr style={{ width: "20%" }} />
            <div
              style={{
                fontSize: 32,
                textAlign: "center",
                color: "rgba(0,0,0,0.6)"
              }}
            >
              Reddit Live
            </div>
            <hr style={{ width: "20%" }} />
            <MDBContainer>
              <MDBRow>
                {redditsPosts &&
                  redditsPosts.map(post => {
                    if (searchVal !== "") {
                      if (
                        post.text.toLowerCase().includes(searchVal) &&
                        category.title.toLowerCase() === post.categoryName
                      ) {
                        return (
                          <CategoryCardReddits
                            post={post}
                            toggleCollapse={this.toggleCollapse}
                            collapseID={this.state.collapseID}
                          />
                        );
                      }
                    } else {
                      if (post.text && post.post_url) {
                        if (
                          post.text.includes(searchVal) &&
                          category.title.toLowerCase() === post.categoryName
                        ) {
                          return (
                            <CategoryCardReddits
                              post={post}
                              toggleCollapse={this.toggleCollapse}
                              collapseID={this.state.collapseID}
                            />
                          );
                        }
                      }
                    }
                  })}
              </MDBRow>
            </MDBContainer>

            <hr style={{ width: "20%" }} />
            <div
              style={{
                fontSize: 32,
                textAlign: "center",
                color: "rgba(0,0,0,0.6)"
              }}
            >
              Facebook
            </div>
            <hr style={{ width: "20%" }} />
            <MDBContainer>
              <MDBRow>
                {fBPosts &&
                  fBPosts.map(post => {
                    if (searchVal !== "") {
                      if (
                        post.text.toLowerCase().includes(searchVal) &&
                        category.title.toLowerCase() ===
                          post.categoryName.toLowerCase()
                      ) {
                        return (
                          <CategoryCardFb
                            post={post}
                            toggleCollapse={this.toggleCollapse}
                            collapseID={this.state.collapseID}
                          />
                        );
                      }
                    } else {
                      if (post.text && post.post_url) {
                        if (
                          post.text.includes(searchVal) &&
                          category.title.toLowerCase() === post.categoryName
                        ) {
                          return (
                            <CategoryCardFb
                              post={post}
                              toggleCollapse={this.toggleCollapse}
                              collapseID={this.state.collapseID}
                            />
                          );
                        }
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
