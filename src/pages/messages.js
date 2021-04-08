import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Messages from '../components/Account/Messages';
import ScrollToTop from '../components/ScrollToTop';

const MessagesPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ScrollToTop />
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Messages />
    </>
  );
};

export default MessagesPage;
