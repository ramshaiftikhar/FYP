import React from "react";
import { useState } from "react";
import SearchBar from "../components/inputs/SearchBar";
import styled from "styled-components";
import "./display.css"
import {

  useTwitterPosts,
 
} from "../queries/SearchQueries";
import {
  Card,
  
  FundRaiserCard,
} from "../components/cards";
import { useEffect } from "react";
const TwitterSearch = (props) => {
  const [categorySelected, categorySelector] = useState("All");
  const [search, searchUpdater] = useState("");
  const [loading, loadUpdate] = useState(false);
  const back = () => {
    window.history.back();
  };
 
  const twitterPosts = useTwitterPosts(categorySelected);

  useEffect(() => {
    loadUpdate(!loading);
  }, [categorySelected, twitterPosts]);
  return (
    <>
      <div className="d-flex justify-content-between px-3 my-3">
        <button className="btn btn-light" onClick={back}>
          <i className="fas fa-chevron-left mr-1"></i>
          Back
        </button>
        <div>
          <SearchBar value={search} updater={searchUpdater} />
        </div>
        <div></div>
      </div>
      <div className="d-flex justify-content-center flex-wrap section-subheading py-2">
        {categories &&
          categories.map((category) => (
            <Category
              key={category.title}
              className={`px-3 mx-2 ${
                category.title === categorySelected
                  ? "bg-dark rounded-pill text-white"
                  : ""
              }`}
              onClick={() => categorySelector(category.title)}
            >
              {category.icon && <i className={`fas fa-${category.icon}`} />}{" "}
              {category.title}
            </Category>
          ))}
      </div>
      <div className="container-fluid">
        <div className="row justify-content-center">
          {loading ? (
            <div className="spinner-border text-primary" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            <div className="col-11">
              <div className="row">

              <div className="col-12">
              <h1 style={{textAlign:"center"}}> <i class="fab fa-twitter" aria-hidden="true"></i> Twitter Posts</h1>
               
                <div className="col-xl-4 col-md-6 col-12">
                  
                  {twitterPosts.data.length === 0 && <h2>No Tweets Found</h2>}
                  {twitterPosts.data.map((res, index) => (
                    <Card {...res} key={index} />
                  ))}
                </div>
                </div>
                
               
           
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
const Category = styled.div`
  cursor: pointer;
`;
let categories = [
  {
    title: "All",
    icon: "check",
  },
  {
    title: "Clothes",
    apiRoute: "cloth",
    icon: "tshirt",
  },
  {
    title: "Disaster",
    apiRoute: "disaster_relief",
    icon: "wheelchair",
  },
  {
    title: "Education",
    apiRoute: "basic_needs",
    icon: "graduation-cap",
  },
  {
    title: "Animals",
    apiRoute: "basic_needs",
    icon: "paw",
  },
  {
    title: "Corona",
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
    title: "Misc",
    apiRoute: "misc",
    icon: "plus",
  },
];
export default TwitterSearch;
