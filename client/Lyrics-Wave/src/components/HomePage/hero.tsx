import React from "react";
import './hero.scss';


interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  return (
    <div className="homePage_open-section">
      <div className="homePage_open-section-caption">
        <h1><span>Writing.</span><span> Creating.</span> <span> Together.</span></h1>
        <button className="homePage_open-section_start-button">
          Start writing
        </button>
      </div>
    </div>
  );
};

export default Hero;
