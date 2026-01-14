import React from "react";
import Hero from "../sections/Hero";
import ImpactHighlights from "../sections/ImpactHighlights";
import FeaturedProjects from "../sections/FeaturedProjects";
import RealPhotos from "../sections/RealPhotos";
import RecognitionsReferences from "../sections/RecognitionsReferences";
import ClosingStatement from "../sections/ClosingStatement";
import MiniClaim from "../sections/MiniClaim";
import Contact from "../sections/Contact";

const Home = () => {
  return (
    <div>
      <Hero/>
      <ImpactHighlights/>
      <FeaturedProjects/>
      <RealPhotos/>
      <RecognitionsReferences/>
      <ClosingStatement/>
      <MiniClaim/>
      <Contact />
    </div>
  );
};

export default Home;