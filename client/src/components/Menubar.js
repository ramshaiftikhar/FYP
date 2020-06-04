import React from "react";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";

class Menubar extends React.Component {
  state = { isOpen: false };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  logout = event => {
    event.preventDefault();
    console.log("logging out");
    axios
      .post("/user/logout")
      .then(response => {
        console.log(response.data); // Only for debugging
        if (response.status === 200) {
          this.props.updateUser({
            loggedIn: false,
            email: null
          });
        }
      })
      .catch(error => {
        console.log("Error in Logging out");
      });
  };

  render() {
    const loggedIn = this.props.loggedIn;

    return (
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top"
        style={{
          background: "#3d210a",
          height: "80px",
          boxShadow: "0 0 20px -5px"
        }}
        id="mainNav"
      >
        <div className="container">
          <Link className="navbar-brand js-scroll-trigger" to="/">
            Raabta
          </Link>
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={this.handleToggle}
          >
            <FaAlignRight className="nav-icon"></FaAlignRight>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav text-uppercase ml-auto">
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#aboutus">
                  About us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#started">
                  Get Started
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#categories">
                  Categories
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#team">
                  Team
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#contact">
                  Contact
                </a>
              </li>

              <li className="nav-item">
                {loggedIn ? (
                  <Link
                    to="#"
                    className="nav-link js-scroll-trigger"
                    onClick={this.logout}
                  >
                    <span>Logout</span>
                  </Link>
                ) : (
                  <Link className="nav-link js-scroll-trigger" to="/signup">
                    Login / Register
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Menubar;
