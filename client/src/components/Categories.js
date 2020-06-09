import React from "react";
import { Link } from "react-router-dom";

class Categories extends React.Component {
  render() {
    return (
      <div id="categories" className="container">
        <header className="page-header">
          <h2 className="section-heading">Browse by Category</h2>
        </header>
        <ul className="category-opt section-subheading">
          {categories &&
            categories.map(category => (
              <li>
                <Link to={{ pathname: "/category", state: { category } }}>
                  <i className={`fa fa-${category.icon}`} /> {category.title}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

export default Categories;

let categories = [
  {
    title: "Cloth",
    apiRoute: "cloth",
    icon: "home"
  },
  {
    title: "Disaster Relief",
    apiRoute: "disaster_relief",
    icon: "wheelchair"
  },
  {
    title: "Education",
    apiRoute: "basic_needs",
    icon: "graduation-cap"
  },
  {
    title: "Animals & Pets",
    apiRoute: "basic_needs",
    icon: "paw"
  },
  {
    title: "COVID",
    apiRoute: "covid",
    icon: "plus"
  },
  {
    title: "Food",
    apiRoute: "food",
    icon: "cutlery"
  },
  {
    title: "Bills",
    apiRoute: "basic_needs",
    icon: "credit-card"
  },
  {
    title: "Environment",
    apiRoute: "environment",
    icon: "globe"
  },
  {
    title: "Miscellaneous",
    apiRoute: "basic_needs",
    icon: "plus"
  }
];
