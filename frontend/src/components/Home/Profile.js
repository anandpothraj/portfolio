import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Button, Image, Fade } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Resume from '../../assets/documents/Anand_Pothraj_Resume.pdf';
import Avatar from '../../assets/images/Main.png';
import { BsTwitter, BsGithub, BsMedium, BsLinkedin, BsMailbox, BsDownload } from 'react-icons/bs';
import { FaDev } from 'react-icons/fa';

const Profile = () => {

  return (
    <div className='m-auto w-75 d-flex text-light' >
      <div className="w-50">
        <div className="info">
          <h6>Hey!</h6>
          <h1>I'm Anand</h1>
          <h3>Web developer</h3>
          <p>I have a passion for technology</p>
        </div>
        <div className="social">
          <p><span>Know more</span> logo <span>about me</span></p>
          <div className="follow">
            <span>Follow</span>
            <BsTwitter/>
            <BsGithub/>
            <BsLinkedin/>
            <BsMedium/>
            <FaDev/>
          </div>
          <div className="buttonDiv">
            <Button><BsMailbox/>Email</Button>
            <Button><BsDownload/>Resume</Button>
          </div>
        </div>
      </div>
      <div className="w-50">
        <Image src={Avatar} fluid alt="avatar" />
      </div>
    </div>
  );
};

export default Profile;