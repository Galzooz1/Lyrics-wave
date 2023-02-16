import React from 'react';
import "./header.scss";
import logoSmall from "../../assets/logo-small.png";
import SignIn from "../Login/signIn";
import SignUp from "../Login/signUp";
import { useState } from "react";

interface HeaderProps {
  
};

const Header: React.FC<HeaderProps> = () => {
    // פתיחה וסגירה של ההתחברות
    const [popSignIn, setPopSignIn] = useState<boolean>(false);

    // פתיחה וסגירה של ההרשמה
    const [popSignUp, setPopSignUp] = useState<boolean>(false);
  
  return(
    <>
      <SignIn
        popSignIn={popSignIn}
        setPopSignIn={setPopSignIn}
        setPopSignUp={setPopSignUp}
      />
      <SignUp
        popSignUp={popSignUp}
        setPopSignUp={setPopSignUp}
        setPopSignIn={setPopSignIn}
      />

      <header className="header">
        <div className="header_logo">
          <img src={logoSmall} />
        </div>
        <nav className="header_nav">
          <div className="header_nav_search">
            <img
              className="header_nav_search-img"
              src="./src/assets/icons/magnifyingGlass.svg"
            />
            <input
              className="header_nav_search-input"
              placeholder="Find a song"
              type="text"
            />
          </div>
        </nav>
        <div className="header_actions">
          <a
            onClick={() => setPopSignIn(!popSignIn)}
            href="#"
            className="header_actions-signin"
          >
            Sign in
          </a>
          <div className="header_actions-post">
            <a href="#">Post A Song</a>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header;