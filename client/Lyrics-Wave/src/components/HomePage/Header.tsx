import * as React from 'react';
import "./header.scss"
import logoSmall from '../../assets/logo-small.png';
import { SignIn } from '../Login/signIn';
import { SignUp } from '../Login/signUp';
import { useState } from 'react';

export interface IHeaderProps {
}

export function Header (props: IHeaderProps) {

  // פתיחה וסגירה של ההתחברות
  const [popSignIn, setPopSignIn] = useState<boolean>(false)

  // פתיחה וסגירה של ההרשמה 
  const [popSignUp, setPopSignUp] = useState<boolean>(false)

  return (

    <div>
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
      <div className="header_left">
        <img className='header_left_logo_small' src={logoSmall} />
      </div>
      <div>
      <div className="header_right_context">
        <div className='header_right_context_input-div'>
          <img className='header_right_context_input-div_img' src="./src/assets/magnifyingGlass.svg"/>
          <input className='header_right_context_input-div_input' placeholder='Find a song' type="text" />
        </div>
        <div>
          <a onClick={() => setPopSignIn(!popSignIn)} href="#" className="header_right_context_sign-in link">Sign in</a></div>
        <div className="header_right_context_post-a-song">
          <a  href="#">Post A Song</a>
        </div>
      </div>
      </div>
    </header>
    </div>
  );
}