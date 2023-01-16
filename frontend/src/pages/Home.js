import React from "react";
import Work from "../components/Home/Work";
import Profile from '../components/Home/Profile';
import RecentProjects from "../components/Home/RecentProjects";

const Home = () => {
  return (
    <div className="bg-dark">
      <Profile/>
      <Work/>
      <RecentProjects/>
    </div>
  );
};

export default Home;