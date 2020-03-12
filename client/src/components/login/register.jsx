import React from "react";
import loginImg from "../../login.svg";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";
import axios from "axios";

export class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      redirectTo: null
    };
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;
    axios
      .post("/user/", {
        email: email,
        password: password
      })
      .then(response => {
        if (!response.data.errmsg) {
          this.setState({
            redirectTo: "/"
          });
          this.props.updateUser({
            loggedIn: true,
            email: response.data.email
          });
        } else {
          console.log("email already taken");
        }
      })
      .catch(error => {
        console.log("signup error: ");
        console.log(error);
      });
  };
  render() {
    const { name, email, password } = this.state;
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    } else {
      return (
        <div className="base-container" ref={this.props.containerRef}>
          <div className="header">Register</div>
          <div className="content">
            <div className="image">
              <img src={loginImg} />
            </div>
            <div className="form">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={name}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  value={email}
                  onChange={this.handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Your password"
                  value={password}
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </div>
          <div className="footer">
            <Link to="/">
              <button
                type="button"
                className="login-btn"
                onClick={this.handleSubmit}
              >
                Register
              </button>{" "}
            </Link>
          </div>
        </div>
      );
    }
  }
}
