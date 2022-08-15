import React from "react";
import LandingPage from "../landing_page/LandingPage";
import NavBar from "../nav_bar/NavBar";
import "./home.css";
const Home = () => {
  return (
    <div id="home" className=" w-full flex flex-col items-center">
      <LandingPage />
    </div>
  );
};

export default Home;
