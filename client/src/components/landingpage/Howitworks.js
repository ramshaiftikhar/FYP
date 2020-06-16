import React from "react";

export class Howitworks extends React.Component {
  render() {
    return (
      <div id="how-it-works" className="clearfix">
        <div className="container colorA2">
          <div id="how-it-works-box" className="col-12 col-m-12 col-m2-12">
            <header className="page-header">
<<<<<<< HEAD
              <h2 className="section-heading">How It Works</h2>
=======
              <h2  style={{color:'black'}} className="section-heading">How It Works</h2>
>>>>>>> 46d009dc8abfbee4a9cdfdb3525b6ac6d147eafd
            </header>

            <div className="row how-it-works-div">
              <div className="how-it-works-content clearfix">
                <div className="item-image col-6">
                  <img src="img/sign-up.png" />
                </div>

                <div className="item-content col-6">
                  <h5 className="colorA1">Get Started</h5>
                  <p className="colorA2 section-subheading">
                    Go to our website, and sign up to create an account
                  </p>
                </div>
              </div>
            </div>

            <div className="row how-it-works-div">
              <div className="how-it-works-content clearfix">
                <div className="item-content col-6">
                  <h5 className="colorA1">
                    Start a fundraiser or search for a category{" "}
                  </h5>
                  <p className="colorA2 section-subheading">
                    Two possible ways to help those in need
                  </p>
                </div>

                <div className="item-image col-6">
                  <img src="img/seo.png" />
                </div>
              </div>
            </div>

            <div className="row how-it-works-div">
              <div className="how-it-works-content clearfix">
                <div className="item-image col-6">
                  <img src="img/donation.png" />
                </div>

                <div className="item-content col-6">
                  <h5 className="colorA1">
                    Contribute to an existing fundraiser
                  </h5>
                  <p className="colorA2 section-subheading">
                    Select a category of your interest and choose one of the
                    existing fundraisers in it to make your contribution
                  </p>
                </div>
              </div>
            </div>

            <div className="row how-it-works-div">
              <div className="how-it-works-content clearfix">
                <div className="item-content col-6">
                  <h5 className="colorA1">Start a fundraiser</h5>
                  <p className="colorA2 section-subheading">
                    Create a fundraiser on your own by providing the necessary
                    details
                  </p>
                </div>

                <div className="item-image col-6">
                  <img src="img/fundraising.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
