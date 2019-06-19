import React from 'react';
import NavItem from './NavItem'
import './style.css'
const NavBar = () =>{
    return(
            <nav className="nav">
              <NavItem to="about" name="About"/>
              <NavItem to="work" name="Experience"/>
              <NavItem to="projects" name="Projects"/>
              <NavItem to="contact" name="Contact"/>
            </nav>
    )
}
export default NavBar;