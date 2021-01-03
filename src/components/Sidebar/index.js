import React, { useState, useEffect } from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  const [navItems, setNavItems] = useState([]);

  useEffect(() => {
    fetch(`./JSON/navItems.json`)
      .then((response) => response.json())
      .then((result) => setNavItems(result));
  }, []);

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          {navItems.map((navItem, key) => (
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
          <SidebarRoute>Sign In</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
