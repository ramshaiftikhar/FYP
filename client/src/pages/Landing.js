import React from "react";
//import Started from './components/Started';
//import Menubar from "../components/Menubar";
import {
  Getstarted,
  Team,
  Howitworks,
  Startedmodal,
  Contact,
  Categories,
  Footer,
<<<<<<< HEAD
  Header,
  About,
} from "../components/landingpage";
import { Menubar } from "../components/headers";

=======
Header,
  About,
  
} from "../components/landingpage";
import { Menubar } from "../components/headers";


>>>>>>> 46d009dc8abfbee4a9cdfdb3525b6ac6d147eafd
class Landing extends React.Component {
  render() {
    return (
      <div className="landing">
        <Menubar />
        {/* Header section*/}
<<<<<<< HEAD
        <Header />
=======
        <Header/>
>>>>>>> 46d009dc8abfbee4a9cdfdb3525b6ac6d147eafd

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
