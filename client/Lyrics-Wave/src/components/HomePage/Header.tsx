import * as React from 'react';
import "./Header.css"
import logoSmall from '../HomePage/logo-small.png'

export interface IHeaderProps {
}

export function Header (props: IHeaderProps) {

  const loginClick = () => {
    document.querySelector(".login-container")?.classList.remove("login-container_hide")
    document.querySelector(".login-container")?.classList.add("login-container_non-hide")
  }
  const signUpClick = () => {
    console.log("click")
    document.querySelector(".signUp-container")?.classList.remove("signUp-container_hide")
    document.querySelector(".signUp-container")?.classList.add("signUp-container_non-hide")
  }


  return (

    <div>
      <header className="header">
      <div className="header_left">
        <img className='header_left_logo_small' src={logoSmall} />
        <a onClick={signUpClick} href="#" className="header_left_context link">
         Sign Up
        </a>
        <a onClick={loginClick} href="#" className="header_left_context link">
          Login
        </a>
      </div>
      <div className="header_mid_context">
        <a href="#" className="link">About</a>
      </div>
      <div className="header_right_context">
        <a href="#">Post A Song</a>
      </div>
    </header>
    </div>
  );
}