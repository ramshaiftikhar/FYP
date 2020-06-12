import React from "react";
import loginImg from "../../login.svg";
import   './error.css';

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
      emailError: "",
      passwordError: "",
      redirectTo: null
    };
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };



  validate = () => {
    let passwordError = "";
    let emailError = "";
    // let passwordError = "";

    if (!this.state.password) {
      passwordError = "Password is a required field.";
    }
    

    if (!this.state.email.includes("@")) {
      emailError = "Email address cannot be blank or invalid.";
    }

    if (emailError || passwordError) {
      this.setState({ emailError, passwordError });
      return false;
    }

    return true;
  };





  handleSubmit = event => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
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
          //alert("Login Successful!");
          // update the state to redirect to home
          this.setState({
            redirectTo: "/"
          });
          this.props.updateUser({
            loggedIn: true,
            email: response.data.email,

            
          });
        }
      })
      .catch(error => {
        console.log("login error: ");
        console.log(error);
      });
    }
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
                  type="email"
                  required
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={this.handleChange}
                />
                <div className="error-message">
                {this.state.emailError}
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  required
                  onChange={this.handleChange}
                />
                <div className="error-message">
                {this.state.passwordError}
                </div>
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
