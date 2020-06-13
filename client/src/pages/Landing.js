import React from "react";
//import Started from './components/Started';
//import Menubar from "../components/Menubar";
import Header from "../components/Header";
import About from "../components/About";
import Howitworks from "../components/Howitworks";
import Getstarted from "../components/Getstarted";
import Startedmodal from "../components/Startedmodal";
import Categories from "../components/Categories";
import Team from "../components/Team";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Menubar from "../components/Menubar";

class Landing extends React.Component {
  render() {
    return (
      <div className="landing">
        <Menubar />
        {/* Header section*/}
        <Header />

        {/* About Us section*/}
        <About />

        {/* Why Raabta section*/}
        <Howitworks />

        {/* How it works section
        <Howitworks /> */}

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
