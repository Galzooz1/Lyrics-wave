import React from "react";
import About from "./about";
import SongsDisplay from "./songsDisplay";
import "./homePage.scss";
import Hero from "./hero";

interface HomepageProps {}

const Homepage: React.FC<HomepageProps> = () => {
  return (
    <div>
      <Hero />
      <div className="homePage_songsDisplay">
        <SongsDisplay />
        <SongsDisplay />
      </div>
      <div className="homePage_about">
        <About />
      </div>
    </div>
  );
};

export default Homepage;
