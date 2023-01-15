import React from "react";
import Profile from '../components/Home/Profile';
import Work from "../components/Home/Work";

const Home = () => {
  return (
    <div className="bg-dark">
      <Profile/>
      <Work/>
    </div>
  );
};

export default Home;