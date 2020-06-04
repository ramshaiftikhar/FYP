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

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    console.log(email, password);

    axios
      .post("/user/login", {
        username: this.state.email,
        password: this.state.password
      })
      .then(response => {
        console.log("login response: ");
        console.log(response);
        if (response.status === 200) {
          alert("Login Successful!");
          // update the state to redirect to home
          this.setState({
            redirectTo: "/"
          });
          this.props.updateUser({
            loggedIn: true,
            email: response.data.email
          });
        }
      })
      .catch(error => {
        console.log("login error: ");
        console.log(error);
      });
  };

  render() {
    const { email, password } = this.state;
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    } else {
      return (
        <div className="base-container" ref={this.props.containerRef}>
          <div className="header">Login</div>
          <div className="content">
            <div className="image">
              <img src={loginImg} />
            </div>
            <div className="form">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </div>
          <div className="footer">
            <div>
              <button
                type="button"
                className="login-btn"
                onClick={this.handleSubmit}
              >
                Login
              </button>{" "}
            </div>
          </div>
        </div>
      );
    }
  }
}
