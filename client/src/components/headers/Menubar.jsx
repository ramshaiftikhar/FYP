import React from "react";
import { FaAlignRight } from "react-icons/fa";
import { scroller } from "react-scroll";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useStore } from "../../context/AuthContext";
const links = {
  aboutus: "About Us",
  started: "Get Started",
  categories: "Categories",
  team: "Team",
  contact: "Contact",
};
export const Menubar = () => {
  const [isOpen, toggler] = useState(false);
  const [state, dispatch] = useStore();
  const handleToggle = () => {
    toggler(!isOpen);
  };
  const logout = (event) => {
    event.preventDefault();
    console.log("logging out");
    axios
      .post("/user/logout")
      .then((response) => {
        console.log(response.data); // Only for debugging
        if (response.status === 200) {
          dispatch({ type: "logout" });
        }
      })
      .catch((error) => {
        console.log("Error in Logging out");
      });
  };

  const scrollToPlace = (e, place) => {
    e.preventDefault();
    console.log("working");
    scroller.scrollTo(place, {
      duration: 1500,
      smooth: true,
    });
  };
  const renderLinks = Object.keys(links).map((res) => (
    <li
      className="nav-item"
      onClick={(e) => scrollToPlace(e, `${res}-element`)}
      key={res}
    >
      {window.location.pathname !== "/" ? (
        <Link className="nav-link js-scroll-trigger" to="/">
          {links[res]}
        </Link>
      ) : (
        <a className="nav-link js-scroll-trigger" href={`#${res}`}>
          {links[res]}
        </a>
      )}
    </li>
  ));
  console.log(window.location.pathname);
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark fixed-top"
      style={{
        background: "black",
        height: "80px",
        boxShadow: "0 0 20px -5px",
      }}
      id="mainNav"
    >
      <div className="container">
        <p className="navbar-brand js-scroll-trigger">Raabta</p>*
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={toggler}
        >
          <FaAlignRight className="nav-icon"></FaAlignRight>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav text-uppercase ml-auto">
            {renderLinks}

            <li className="nav-item">
              {state.loggedIn ? (
                <Link
                  to="#"
                  className="nav-link js-scroll-trigger"
                  onClick={logout}
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
};
