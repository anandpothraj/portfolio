import React from 'react';
import ContactPrompt from '../components/ContactPrompt';
import NavigationBar from '../components/NavigationBar';

const Header = () => {
  return (
    <div>
      <ContactPrompt/>
      <NavigationBar/>
    </div>
  )
};

export default Header;