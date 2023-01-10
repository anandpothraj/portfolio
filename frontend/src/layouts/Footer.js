import React from 'react';
import MainFooter from '../components/Footer/MainFooter';
import SubFooter from '../components/Footer/SubFooter';

const Footer = () => {
  return (
    <>
      <div className='py-4 bg-black'>
        <MainFooter/>
      </div>
      <SubFooter/>
    </>
  )
}

export default Footer;