import React from "react";
import Skills from "../sections/Skills";
import Portfolio from "../sections/Portfolio"
import Intro from "../sections/Intro";
import AboutMe from "../sections/AboutMe";

const Home = () => {
  return (
    <div>
      <Intro/>
      <Portfolio/>
      <AboutMe/>
      <Skills />
    </div>
  );
};

export default Home;