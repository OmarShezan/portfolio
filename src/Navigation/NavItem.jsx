import React from 'react';
import { Link } from "react-scroll";
import './style.css'
const NavItem = (props) =>{
    return(
                <Link
                      className="menuItem"
                      activeClass="active"
                      to={props.to}
                      spy={true}
                      smooth={true}
                      offset={-20}
                      duration= {500}>
                      {props.name}
                      </Link>
             

    )
}
export default NavItem;