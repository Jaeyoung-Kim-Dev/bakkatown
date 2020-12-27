import React from 'react'
import {Nav, NavbarContainer, Navlogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements';
import {FaBars} from 'react-icons/fa';

const Navbar = () => {
  return (
    <>
    <Nav>
      <NavbarContainer>
        <Navlogo to="/">
          <h1>Hey</h1>
        </Navlogo>
        <MobileIcon>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks to="about">About</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="discover">Discover</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="services">Services</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="signup">Sign Up</NavLinks>
          </NavItem>          
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/signin">Sign In</NavBtnLink>
        </NavBtn>
      </NavbarContainer>
    </Nav>
   </>
  )
}

export default Navbar
