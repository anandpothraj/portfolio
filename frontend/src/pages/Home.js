import React from "react";
import Work from "../components/Home/Work";
import Profile from '../components/Home/Profile';
import RecentProjects from "../components/Home/RecentProjects";
import Hire from "../components/Home/Hire";
import Interested from "../components/Home/Interested";
import Testimonial from '../components/Home/Testimonial';

const Home = () => {
  return (
    <div>
      <Profile/>
      <Work/>
      <RecentProjects/>
      <Testimonial/>
      <Hire/>
      <Interested/>
    </div>
  );
};

export default Home;