import React from 'react';
import './style.css';
import { ReactComponent as Arrow } from  '../assets/Arrow.svg';
import {Link} from "react-scroll";
import Fade from 'react-reveal/Fade';

const HomePage = () =>{
    return(
          <div id="home">
            <div className="Text">
      <Fade left>

              <div id="title"><span className="hello">Hello,</span> I'm Omar Shezan</div>
              <div id = "sub-title">Software Engineer based in Sheffield (UK).</div>
              <Link
                      className="menuItem"
                      activeClass="active"
                      to="about"
                      spy={true}
                      smooth={true}
                      offset={-30}
                      duration= {500}>
                      <Arrow className="arrow"  />
                </Link>
          </Fade>
              
            </div>
          </div>
    )
}
export default HomePage;