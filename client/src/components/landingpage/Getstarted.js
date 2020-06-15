import React from "react";
import { Link } from "react-router-dom";
//import Startedmodal from './Startedmodal';
import { Element } from "react-scroll";

export class Getstarted extends React.Component {
  render() {
    const startedLinks = [
      {
        title: "Help people in need",
        caption:
          "Provide direct support to an individual, family or community by paying for their meals, clothes",
        source: "/img/food.jpg",
      },
      {
        title: "Take action in an emergency",
        caption:
          "Raise funds in response to a natural disaster or humanitarian crisis. Make a difference in minutes.",
        source: "/img/flood.jpg",
      },
      {
        title: "Take part in a charity event",
        caption:
          "Choose from hundreds of official events including marathons, bike rides, Dryathlons and bake offs…",
        source: "/img/3.jpeg",
      },
      {
        title: "Celebrate an occasion",
        caption:
          "Mark a special event like a birthday, wedding or final exam by asking friends for donations rather than gifts",
        source: "/img/4.jpeg",
      },
    ];

    return (
      <Element name="started-element">
        <section className="bg-light page-section" id="started">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2  style={{color:'black'}} className="section-heading ">Ideas To Get You Started</h2>
                <h3 className="section-subheading">
                  There are a lot of ways to make good things happen...
                </h3>
              </div>
            </div>
            <div className="row">
              {startedLinks &&
                startedLinks.map(({ title, caption, source }, index) => (
                  <div className="col-md-6 col-sm-12 started-item" key={index}>
                    <a
                      className="started-link"
                      data-toggle="modal"
                      href="#started-modal"
                    >
                      <div className="started-hover">
                        <div className="started-hover-content">
                          <i className="fa fa-plus fa-3x"></i>
                        </div>
                      </div>
                      <img className="img-fluid" src={source} alt="" />
                    </a>

                    <div className="started-caption">
                      <h4>{title}</h4>
                      <p className="section-subheading">{caption}</p>
                    </div>
                  </div>
                ))}
            </div>

            <Link
              className="btn btn-primary btn-xl text-uppercase js-scroll-trigger"
              to="/user/create"
            >
              Start Fundraising{" "}
            </Link>
          </div>
        </section>
      </Element>
    );
  }
}
