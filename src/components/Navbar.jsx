import React from 'react'
// import { NavLink } from 'react-router-dom'
import logo from '../assets/logoorg.png'
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElement';
function Navbar() {
  return (
    <>
    <Nav>
     
        <img src={logo} alt="" />
      
      <Bars/>
      <NavMenu>
        <NavLink to="/home" activeStyle>
          Home
        </NavLink>
        {/* <NavLink to="/services" activeStyle>
          Services
        </NavLink>
        <NavLink to="/about" activeStyle>
          About
        </NavLink> */}
        <NavLink to="/support" activeStyle>
        Support Center
        </NavLink>
        <NavBtn>
        <NavBtnLink to="/signin">
          Sigh In
        </NavBtnLink>
      </NavBtn>
      </NavMenu>
      {/* <NavBtn>
        <NavBtnLink to="/signin">
          Sigh In
        </NavBtnLink>
      </NavBtn> */}
    </Nav>
    </>
  )
}

export default Navbar