import React from "react";
import About from "./about";
import SongsDisplay from "./songsDisplay";
import "./homePage.scss";

interface HomepageProps {

}

const Homepage: React.FC<HomepageProps> = () => {
  return (
    <div>
      <div className="homePage_open-section">
        <h1>Writing Creating Together</h1>
        <button className="homePage_open-section_start-button">
          Start writing
        </button>
      </div>
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
