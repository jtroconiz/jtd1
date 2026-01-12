import React from "react";
import Hero from "../sections/Hero";
import ImpactHighlights from "../sections/ImpactHighlights";
import FeaturedProjects from "../sections/FeaturedProjects";
import ClosingStatement from "../sections/ClosingStatement";
import Contact from "../sections/Contact";

const Home = () => {
  return (
    <div>
      <Hero/>
      <ImpactHighlights/>
      <FeaturedProjects/>
      <ClosingStatement/>
      <Contact />
    </div>
  );
};

export default Home;