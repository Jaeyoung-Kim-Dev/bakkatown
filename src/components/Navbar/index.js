import React, { useEffect, useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import NavItems from './navItems.json';
import {
  Nav,
  NavbarContainer,
  Navlogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= document.documentElement.clientHeight * 0.1) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <Navlogo to='/' onClick={toggleHome}>
              Bakkatown Belize
            </Navlogo>
            <NavMenu>
              {NavItems.navNames.map((navItem, key) => (
                <NavItem key={key}>
                  <NavLinks
                    to={navItem.itemName.toLowerCase().replace(' ', '')}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-document.documentElement.clientHeight * 0.1}
                  >
                    {navItem.itemName}
                  </NavLinks>
                </NavItem>
              ))}
            </NavMenu>
            <NavBtn>
              <NavBtnLink
                to='/book'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={document.documentElement.clientHeight * 0.1}
              >
                BOOK
              </NavBtnLink>
            </NavBtn>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
