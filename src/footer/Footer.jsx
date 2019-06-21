import React from 'react';
import './footer.css'
import Title from '../component/Title';
import { ReactComponent as LinkedIn } from '../assets/linkedIn.svg';
import { ReactComponent as Github } from '../assets/github.svg';
import { ReactComponent as Facebook } from '../assets/facebook.svg';
import { ReactComponent as Instagram } from '../assets/instagram.svg';
import { ReactComponent as Unsplash } from '../assets/unsplash.svg';

const Footer = () =>{
    return(
          <div id="footer">
              
              <Title  name="Stay Connected"/>
              <div className="icons">
              <div><a href="https://www.linkedin.com/in/omar-sharif-shezan/"><LinkedIn className="eachIcon" /></a></div>
              <div><a href="https://github.com/OmarShezan"><Github className="eachIcon"/></a></div>
              <div><a href="https://www.facebook.com/profile.php?id=100013626872791"><Facebook className="eachIcon"/></a></div>
              <div><a href="https://www.instagram.com/shezan60/"><Instagram className="eachIcon"/></a></div>
              <div><a href="https://unsplash.com/@shezan60"><Unsplash className="eachIcon"/></a></div>
              </div>
              <span className="copyright">OMAR SHEZAN <span style={{color:"#E31B6D"}}>&copy;2019</span></span>
              
             
          </div>
    )
}
export default Footer;