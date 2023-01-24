import * as React from 'react';
import "./Header.scss"
import logoSmall from '../HomePage/logo-small.png'
import { Login } from '../Login/Login';
import { SignUp } from '../Login/SignUp';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

export interface IHeaderProps {
}

export function Header (props: IHeaderProps) {

  // פתיחה וסגירה של ההתחברות
  const [popLogIn, setPopLogIn] = useState<boolean>(false)

  // פתיחה וסגירה של ההרשמה 
  const [popSignUp, setPopSignUp] = useState<boolean>(false)

  return (

    <div>
      <Login 
      popLogIn={popLogIn}
      setPopLogIn={setPopLogIn}
      setPopSignUp={setPopSignUp}
      />
      <SignUp
      popSignUp={popSignUp}
      setPopSignUp={setPopSignUp}
      setPopLogIn={setPopLogIn}
      />


      <header className="header">
      <div className="header_left">
        <img className='header_left_logo_small' src={logoSmall} />
        <a onClick={() => setPopSignUp(!popSignUp)} href="#" className="header_left_context link">
         Sign Up
        </a>
        <a onClick={() => setPopLogIn(!popLogIn)} href="#" className="header_left_context link">
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