import React, { useState } from 'react';
import SignUp from '../components/Account/Signup';
import ScrollToTop from '../components/ScrollToTop';

const SignupPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ScrollToTop />
      <SignUp />
    </>
  );
};

export default SignupPage;
