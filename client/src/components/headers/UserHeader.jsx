import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useStore } from "../../context/AuthContext";
import axios from "axios";
export const UserHeader = (props) => {
  const linkRef = React.createRef();
  const [state, dispatch] = useStore();
  const logout = (event) => {
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
  console.log(state);
  return (
    <StyledHeader className="fixed-top d-flex align-items-center justify-content-between px-2 bg-dark text-light">
      <Link to="/search" className="text-decoration-none">
        <h4 className="text-primary cursor-pointer">Raabta</h4>
      </Link>
      <ul className="nav">
        <li className="nav-item">
          <Link
            className="nav-link text-decoration-none text-light"
            to="/user/create"
          >
            Create
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link text-decoration-none text-light"
            to="/user/view"
          >
            View
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link text-decoration-none text-light"
            to="/search"
          >
            Search
          </Link>
        </li>
      </ul>
      <div className="d-flex flex-wrap text-light align-items-center">
        {state.email}
        <button className="btn btn-secondary ml-2" onClick={() => logout()}>
          Logout
        </button>
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  height: 60px;
`;
