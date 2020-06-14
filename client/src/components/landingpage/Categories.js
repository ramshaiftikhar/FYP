import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Element } from "react-scroll";

import "./Categories.css"

export const Categories = (props) => {
  return (
    <StyledElement name="categories-element">
      <div id="categories" className="container">
        <header className="page-header">
          <h2 className="section-heading">Browse by Category</h2>
        </header>
        <div className="text-center">
          <img className="category-table" src="/img/category-table3.png"></img>
        </div>
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
