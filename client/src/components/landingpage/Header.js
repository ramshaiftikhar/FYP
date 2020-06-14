import React from "react";
import { scroller } from "react-scroll";

export class Header extends React.Component {
  scrollToPlace = (e) => {
    e.preventDefault();
    console.log("working");
    scroller.scrollTo("started-element", {
      duration: 1500,
      smooth: true,
    });
  };

  render() {
    return (
      <header className="masthead">
        <div className="container">
          <div className="intro-text">
            <div className="intro-lead-in intro-heading ">
              You can make a difference!
            </div>
            <div className="intro-lead-in ">
              Raise money for charity and personal causes
            </div>
            <button
              className="btn btn-primary btn-xl text-uppercase js-scroll-trigger"
              onClick={this.scrollToPlace}
            >
              Get Started
            </button>
          </div>
        </div>
      </header>
    );
  }
}
