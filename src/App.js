import React from "react";
import "./App.css";
import HomePage from "./homePage/HomePage";
import Navigation from "./Navigation/NavBar";
import About from "./about/About";
import Work from "./work/Work";
import { Element } from "react-scroll";
import Fade from "react-reveal/Fade";
import Projects from "./project/Projects";
import Contact from "./Contact/Contact";
import Footer from "./footer/Footer";

function App() {
  return (
    <div className="App">
      <HomePage />
      <Navigation />

      <div className="main">
        <Fade right>
          <About />
        </Fade>

        <Element>
          <Work />
        </Element>
        <Element>
          <Projects />
        </Element>
        <Element>
          <Contact />
        </Element>
        <Footer />
      </div>
    </div>
  );
}

export default App;
