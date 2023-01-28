import React from 'react';
import { FaDev } from 'react-icons/fa';
import { Button, Image } from 'react-bootstrap';
import { BsTwitter, BsGithub, BsMedium, BsLinkedin } from 'react-icons/bs';
import Avatar from '../../assets/images/Third.png';
import { Link } from 'react-router-dom';
import "./About.css";

const AboutInfo = () => {
  return (
    <div className='d-flex my-5'>
        <div className="w-50 m-auto">
          <Image src={Avatar} fluid alt="avatar1" className='d-block m-auto'/>
        </div>
        <div className="w-50 m-auto">
            <div className='my-2'>
                <h1>Anand Pothraj</h1>
                <p className='text-secondary font-weight-normal'>Full Stack Developer, technical writer, and a passionate learner.
                </p>
            </div>
            <div className='my-2'>
                <h6>Email Me</h6>
                <Button className='btn-sm bgBlueGreen border-none rounded' href="mailto:pothrajanand@gmail.com">pothrajanand@gmail.com</Button>  
            </div>
            <div className='my-4 w-75 d-flex justify-content-between'>
                <Link to='/projects' className='my-auto'>
                    <Button className='btn-sm px-md-3 py-md-2 bgOrange border-none rounded'>Projects</Button>
                </Link>
                <Link to='/blogs' className='my-auto '>
                    <Button className='btn-sm px-md-3 py-md-2 bgLightBlue border-none rounded'>Blogs</Button>
                </Link>
                <Link to='/contact' className='my-auto'>
                    <Button className='btn-sm px-md-3 py-md-2 bgYellow border-none rounded'>Contact</Button>
                </Link><Link to='/profiles' className='my-auto'>
                    <Button className='btn-sm px-md-3 py-md-2 bgBlueGreen border-none rounded'>Profiles</Button>
                </Link>
            </div>
            <div className="my-1 my-md-4 d-flex">
                <h5 className='d-md-inline follow my-auto'>Follow Me</h5>
                <a href="https://www.linkedin.com/in/anand-pothraj-599910195" target="_blank" rel="noreferrer"><BsLinkedin className="m-2 socialIcon"/></a>
                <a href="https://github.com/anandpothraj" target="_blank" rel="noreferrer"><BsGithub className="m-1 m-md-2 socialIcon"/></a>
                <a href='https://twitter.com/PothrajAnand' target="_blank" rel="noreferrer"><BsTwitter className="m-2 socialIcon"/></a>
                <a href="https://dev.to/anandpothraj" target="_blank" rel="noreferrer"><FaDev className="m-2 socialIcon"/></a>
                <a href="https://medium.com/@anandpothraj11052001" target="_blank" rel="noreferrer"><BsMedium className="m-2 socialIcon"/></a>
            </div>
        </div>
    </div>
  )
}

export default AboutInfo;