import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights, FooterLinkItems, FooterLinkTitle, FooterLink,
} from './FooterElements';

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>
              Bakkatown Belize
            </SocialLogo>
            <WebsiteRights>
              {new Date().getFullYear()} BAKKATOWN BELIZE. All rights reserved.
            </WebsiteRights>
            <FooterLinkItems>
              <FooterLink to='/admin'>Admin</FooterLink>
            </FooterLinkItems>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
