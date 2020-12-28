import React from 'react'
import {Nav, NavbarContainer, Navlogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements';
import {FaBars} from 'react-icons/fa';

const Navbar = ({isOpen, toggle}) => {
  return (
    <>
    <Nav>
      <NavbarContainer>
        <Navlogo to="/">
          Jaeyoung Kim
        </Navlogo>
        <MobileIcon onClick={toggle}>
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
