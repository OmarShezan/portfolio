import React, { useEffect, useState } from 'react';
import './style.css';
import { ReactComponent as Arrow } from  '../assets/Arrow.svg';
import {Link} from "react-scroll";
import Fade from 'react-reveal/Fade';

const HomePage = () =>{
      const [data, setData] = useState(null);

      useEffect(() => {
        const fetchData = async () => {
          const response = await fetch("https://us-central1-os-backend.cloudfunctions.net/getCVLink");
          const newData = await response.json();
          setData(newData);
        };
    
        fetchData();
      });
    

    return(
          <div id="home">
            <div className="Text">
      <Fade left>

              <div id="title"><span className="hello">Hello,</span> I'm Omar Shezan</div>
              <div id = "sub-title">Software Engineer based in Sheffield (UK).</div>
              <br/>
              
              <button id = "sub-title" className='cv'>
                  <a
                  style={{ textDecoration: 'none', color: 'white' }}
                  href={data || 
                  'https://firebasestorage.googleapis.com/v0/b/os-backend.appspot.com/o/omar_cv2021.pdf?alt=media&token=09645343-843c-48eb-8840-d14221331e61'
                  } rel="noreferrer" target='_blank'>Download CV</a></button> 
              
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