import React, { useRef } from "react";
import { FaAlignRight } from "react-icons/fa";
import Scroll, { Element, scroller } from 'react-scroll';
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

 

  scrollToPlace = (e,place) => {
    e.preventDefault();
    console.log('working');
    scroller.scrollTo(place, {
        duration: 1500,
        smooth: true,
      });
};


  

  render() {
 
    const loggedIn = this.props.loggedIn;
    console.log(window.location.pathname)
    return (
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top"
        style={{
          background: "black",
          height: "80px",
          boxShadow: "0 0 20px -5px"
        }}
        id="mainNav"

      >
        
        
       
        
       
        <div className="container">

          
          <p className="navbar-brand js-scroll-trigger">

            Raabta
            
          </p>
          

          
          *<button
          
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
              <li className="nav-item" onClick={ (e) => this.scrollToPlace(e, "about-element") }>
                {window.location.pathname !== "/" ? (
                  <Link className="nav-link js-scroll-trigger" to="/">
                    About us
                  </Link>
                ) : (
                  <a className="nav-link js-scroll-trigger" href="#aboutus">
                    About us
                  </a>
                )}
              </li>
              <li className="nav-item"  onClick={ (e) => this.scrollToPlace(e, "getstarted-element") }>
                {window.location.pathname !== "/" ? (
                  <Link className="nav-link js-scroll-trigger" to="/">
                   Get started
                  </Link>
                ) : (
                  <a className="nav-link js-scroll-trigger" href="#started">
                    Get Started
                  </a>
                )}
              </li>
              <li className="nav-item" onClick={ (e) => this.scrollToPlace(e, "categories-element")} >
                {window.location.pathname !== "/" ? (
                  <Link className="nav-link js-scroll-trigger" to="/">
                    Categories
                  </Link>
                ) : (
                  <a className="nav-link js-scroll-trigger" href="#categories">
                    Categories
                  </a>
                )}
              </li>
              <li className="nav-item"  onClick={ (e) => this.scrollToPlace(e, "team-element") } >
                {window.location.pathname !== "/" ? (
                  <Link className="nav-link js-scroll-trigger" to="/">
                    Team
                  </Link>
                ) : (
                  <a className="nav-link js-scroll-trigger" href="#team">
                    Team
                  </a>
                )}
              </li>
              <li className="nav-item"  onClick={ (e) => this.scrollToPlace(e, "contact-element") } >
                {window.location.pathname !== "/" ? (
                  <Link className="nav-link js-scroll-trigger" to="/">
                    Contact
                  </Link>
                ) : (
                  <a className="nav-link js-scroll-trigger" href="#contact">
                    Contact
                  </a>
                )}
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
                    Login
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
