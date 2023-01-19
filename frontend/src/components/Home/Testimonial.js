import "swiper/css";
import "swiper/css/pagination";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { Image } from 'react-bootstrap';
import "./Home.css";
import Avatar1 from '../../assets/images/Avatar1.png';
// import Avatar2 from '../../assets/images/Avatar2.png';
// import Avatar3 from '../../assets/images/Avatar3.jfif';
// import Avatar4 from '../../assets/images/Avatar4.jfif';
import { BsTwitter, BsLinkedin } from 'react-icons/bs';

const Testimonial = () => {

    return (
        <div className="col-11 col-md-9 m-auto my-5 text-light">
            <h1>Testimonials</h1>
            <Swiper slidesPerView={1} spaceBetween={30} pagination={{clickable: true}} modules={[Pagination]} className="mySwiper">
                <SwiperSlide>
                    <div className="w-100 w-md-75 m-auto m-md-4 bg-light rounded text-dark d-flex flex-column flex-md-row">
                        <div className="w-100 w-md-25 bg-warning d-flex m-auto p-2 rounded flex-column">
                            <Image src={Avatar1} fluid className="w-50 h-auto rounded-circle m-auto"/>
                            <div className="my-2">
                                <a href="https://www.linkedin.com/in/" target="_blank" rel="noreferrer"><BsLinkedin className="m-2 socialIcon text-dark"/></a>
                                <a href='https://twitter.com/' target="_blank" rel="noreferrer"><BsTwitter className="m-2 socialIcon text-dark"/></a>
                            </div>
                        </div>
                        <div className="w-100 w-md-75 text-left py-2 px-4">
                            <p className="my-1"><b>Anand Narsappa Pothraj</b></p>
                            <p className="text-secondary">Full Stack Developer</p>
                            <p className="px-2">
                                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto quo fuga itaque sequi animi laborum dolore reprehenderit ducimus ratione, unde atque quaerat. Odit laboriosam distinctio in rem unde delectus, nesciunt dolorem harum?"
                            </p>
                            <span></span>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Testimonial;
