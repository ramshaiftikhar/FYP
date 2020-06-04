import React from "react";
//import Started from './components/Started';
import Menubar from "../components/Menubar";
import Header from "../components/Header";
import About from "../components/About";
import Howitworks from "../components/Howitworks";
import Getstarted from "../components/Getstarted";
import Startedmodal from "../components/Startedmodal";
import Categories from "../components/Categories";
import Team from "../components/Team";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

class Landing extends React.Component {

  render() {
    return (
      <div className="landing">
        {/* Header section*/}
        <Header />

        {/* About Us section*/}
        <About />

        {/* Why Raabta section*/}
                <div id="why-raabta" className="clearfix">
                    <div className="container" id="why-raabta-Container">
                        <header className="page-header colorA2">
                            <h2 classNameName="section-heading">Why Raabta</h2>
                        </header>
                    <div className="row">
                        <div className="why-raabta-divs col-4 col-m-6 col-m2-12">
                            <img src="img/1.jpeg" alt="brand-teams" />
                            <div className="why-raabta-content">
                                <h5 className="colorA1">Split Costs</h5>
                                <p className="colorA2 section-subheading">Riders contribute an amount based on distance.</p>
                            </div>
                        </div>

                        <div className="why-raabta-divs col-4 col-m-6 col-m2-12">
                            <img src="img/2.jpeg" alt="market-teams" />
                            <div className="why-raabta-content">
                                <h5 className="colorA1">Connect</h5>
                                <p className="colorA2 section-subheading">Living in the city can be a social experience.</p>
                            </div>
                        </div>

                        <div className="why-raabta-divs col-4 col-m-6 col-m2-12" id="why-raabta-div-3">
                            <img src="img/3.jpeg" alt="sales-teams" />
                            <div className="why-raabta-content">
                                <h5 className="colorA1">Reduce Congestion</h5>
                                <p className="colorA2 section-subheading">Help reduce the number of cars on the roads.</p>
                            </div>
                        </div>
                    </div>

                    </div>
            </div>

        {/* How it works section*/}
        <Howitworks />

        {/* Get started Grid */}
        <Getstarted />

        {/* Started Grid
            <Started startedLinks={startedLinks}></Started> */}

        <Startedmodal />

        {/* Categories */}
        <Categories />

        {/* Team */}
        <Team />

        {/* Contact */}
        <Contact />

        {/* Footer */}
        <Footer />
      </div>
    );
  }
}

export default Landing;
