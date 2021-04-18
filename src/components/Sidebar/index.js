import React, { useState, useContext } from 'react';
import NavItems from '../Navbar/navItems.json';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { UserContext } from '../../UserContext';
import { toast } from 'react-toastify';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
  AccountLink,
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  const { user, setUser } = useContext(UserContext);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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

  return (
    <SidebarContainer isOpen={isOpen}>
      {/* <SidebarContainer isOpen={isOpen} onClick={toggle}> */}
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          {NavItems.navNames.map((navItem, key) => (
            <SidebarLink
              key={key}
              to={navItem.itemName.toLowerCase().replace(' ', '')}
              onClick={toggle}
            >
              {navItem.itemName}
            </SidebarLink>
          ))}
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to='/book'>BOOK</SidebarRoute>
          {user.email ? (
            <>
              <SidebarRoute onClick={handleClick}>
                {user.firstName} {user.lastName.charAt(0)}
                {'.'}
              </SidebarRoute>
              <Menu
                id='simple-menu'
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>
                  <AccountLink to='/account'>Account</AccountLink>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <AccountLink to='/reservations'>Reservations</AccountLink>
                </MenuItem>
                <MenuItem onClick={logOut}>Logout</MenuItem>
              </Menu>
            </>
          ) : (
            <SideBtnWrap>
              <SidebarRoute to='/login'>Log In</SidebarRoute>
            </SideBtnWrap>
          )}
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
