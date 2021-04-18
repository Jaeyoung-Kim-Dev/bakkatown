import React, { useState } from 'react';
import Forgot from '../components/Account/Forgot';
import ScrollToTop from '../components/ScrollToTop';

const ForgotPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ScrollToTop />
      <Forgot />
    </>
  );
};

export default ForgotPage;
