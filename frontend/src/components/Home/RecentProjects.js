import React from 'react';
import { Button, Image } from 'react-bootstrap';
import './Home.css';
import { Link } from 'react-router-dom';

const RecentProjects = () => {
    
  return (
    <div className='text-light col-11 col-md-9 m-auto py-1'>
        <div className="d-flex justify-content-between my-1 my-md-4">
            <h1 className='primaryLightBlue'>Recent Projects</h1>
            <Link to='/projects'>
                <Button className='btn-sm px-md-3 py-md-2' variant='outline-warning'>View More</Button>
            </Link>
        </div>
        <div className="my-3 rounded py-1 d-flex flex-column flex-md-row">
            <div className="col-10 col-md-5 rounded shadow-lg bg-secondary m-auto my-3">
                <Image src='https://user-images.githubusercontent.com/75027034/192147910-cc3c8186-5d0b-4ad5-9f05-c963ef97809b.png' className='w-100 h-auto rounded-top'/>
                <div className='w-100 d-flex p-2 p-md-3'>
                    <p className='w-50'>Vaccination System</p>
                    <p className='w-50'>Technology</p>
                </div>
                <div className="w-100 d-flex p-2">
                    <div className='w-50 d-flex'>
                        <Button className='btn-sm m-auto w-75'>Details</Button>
                    </div>
                    <div className='w-50 d-flex'>
                        <Button className='btn-sm m-auto w-75'>Preview</Button>
                    </div>
                </div>
            </div>
            <div className="col-10 col-md-5 rounded shadow-lg bg-secondary m-auto my-3">
                <Image src='https://user-images.githubusercontent.com/75027034/192147910-cc3c8186-5d0b-4ad5-9f05-c963ef97809b.png' className='w-100 h-auto rounded-top'/>
                <div className='w-100 d-flex p-2 p-md-3'>
                    <p className='w-50'>Vaccination System</p>
                    <p className='w-50'>Technology</p>
                </div>
                <div className="w-100 d-flex p-2">
                    <div className='w-50 d-flex'>
                        <Button className='btn-sm m-auto w-75'>Details</Button>
                    </div>
                    <div className='w-50 d-flex'>
                        <Button className='btn-sm m-auto w-75'>Preview</Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RecentProjects;