import React, { useEffect, useState, useContext } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import NavItems from './navItems.json';
import { UserContext } from '../../UserContext';
import { toast } from 'react-toastify';
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
  const { user, setUser } = useContext(UserContext);
  const [scrollNav, setScrollNav] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    console.log(localStorage); // TODO: delete it later
  };

  const logOut = () => {
    handleClose();
    localStorage.clear();
    setUser({ email: null });
    toast('Your account has been successfully logged out.', {
      type: 'success',
    });
    console.log(localStorage);
  };

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
              {user.email ? (
                <>
                  <NavBtnLink onClick={handleClick}>
                    {user.firstName} {user.lastName.charAt(0)}
                    {'.'}
                  </NavBtnLink>
                  <Menu
                    id='simple-menu'
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleClose}>
                      <Link to='/account'>Account</Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <Link to='/reservations'>Reservations</Link>
                    </MenuItem>
                    <MenuItem onClick={logOut}>Logout</MenuItem>
                  </Menu>
                </>
              ) : (
                <NavBtnLink
                  to='/login'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={document.documentElement.clientHeight * 0.1}
                >
                  Log In
                </NavBtnLink>
              )}
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
