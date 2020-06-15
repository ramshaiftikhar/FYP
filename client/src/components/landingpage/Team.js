import React from "react";
import Scroll, { Element, scroller } from "react-scroll";

export class Team extends React.Component {
  render() {
    return (
      <Element name="team-element">
        <section className="bg-light page-section" id="team">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <header className="page-header">
                  <h2  style={{color:'black'}} className="section-heading">Our Amazing Team</h2>
                </header>
                {/*<h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3> */}
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4">
                <div className="team-member">
                  <img
                    className="mx-auto rounded-circle"
                    src="/img/team/ramsha.jpg"
                    alt=""
                  />
                  <h4>Ramsha Iftikhar</h4>
                  <p className="section-subheading text-muted">
                    Front End Developer
                  </p>
                  <ul className="list-inline social-buttons">
                    <li className="list-inline-item">
                      <a href="#something">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#something">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#something">
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="team-member">
                  <img
                    className="mx-auto rounded-circle"
                    src="/img/team/junaid.jpg"
                    alt=""
                  />
                  <h4>Junaid Khalid</h4>
                  <p className="section-subheading text-muted">
                    Data Scientist
                  </p>
                  <ul className="list-inline social-buttons">
                    <li className="list-inline-item">
                      <a href="#something">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#something">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#something">
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="team-member">
                  <img
                    className="mx-auto rounded-circle"
                    src="/img/team/ahsan.jpg"
                    alt=""
                  />
                  <h4>Muhammad Ahsan</h4>
                  <p className=" section-subheading text-muted">
                    Back End Developer
                  </p>
                  <ul className="list-inline social-buttons">
                    <li className="list-inline-item">
                      <a href="#something">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#something">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#something">
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8 mx-auto text-center">
                <p className="large section-subheading text-muted">
                  The difference between success and failure is a great team
                </p>
              </div>
            </div>
          </div>
        </section>
      </Element>
    );
  }
}
