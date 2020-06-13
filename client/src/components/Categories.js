import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Scroll, { Element, scroller } from "react-scroll";

const Categories = (props) => {
  return (
    <StyledElement name="categories-element">
      <div id="categories" className="container">
        <header className="page-header">
          <h2 className="section-heading">Browse by Category</h2>
        </header>
        <p className="text-center section-subheading">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam ullam
          eius, provident necessitatibus tempore repellat in? Ullam sint
          consequatur odit nam aliquid quo corporis tempora? Quidem tempore
          fugit non assumenda?
        </p>
        <StyledLink to="/search">
          <div className="d-flex justify-content-center">
            <button className="btn btn-primary btn-xl text-uppercase js-scroll-trigger">
              Browse
            </button>
          </div>
        </StyledLink>
        {/* <ul className="category-opt section-subheading">
          {categories &&
            categories.map(category => (
              <li className="category">
                <Link to={{ pathname: "/category", state: { category } }}>
                  <i className={`fas fa-${category.icon}`} /> {category.title}
                </Link>
              </li>
            ))}
        </ul> */}
      </div>
    </StyledElement>
  );
};

export default Categories;

const StyledElement = styled(Element)`
  padding-bottom: 20px;
`;
const StyledLink = styled(Link)`
  text-decoration: none !important;
`;
let categories = [
  {
    title: "Clothes",
    apiRoute: "cloth",
    icon: "tshirt",
  },
  {
    title: "Disaster Relief",
    apiRoute: "disaster_relief",
    icon: "wheelchair",
  },
  {
    title: "Education",
    apiRoute: "basic_needs",
    icon: "graduation-cap",
  },
  {
    title: "Animals & Pets",
    apiRoute: "basic_needs",
    icon: "paw",
  },
  {
    title: "COVID",
    apiRoute: "covid",
    icon: "ambulance",
  },
  {
    title: "Food",
    apiRoute: "food",
    icon: "bread-slice",
  },
  {
    title: "Bills",
    apiRoute: "basic_needs",
    icon: "credit-card",
  },
  {
    title: "Environment",
    apiRoute: "environment",
    icon: "globe",
  },
  {
    title: "Miscellaneous",
    apiRoute: "basic_needs",
    icon: "plus",
  },
];
